import { disconnect } from "@wagmi/core";
import { useUserStore } from "../store/userDataStore";
import { APIMethod, APIOptions, APIResponse } from "../types/commonType";
import { config } from "../web3/wagmi/config";
import { toast } from "sonner";
import { zeroAddress } from "viem";
import { urls } from "./settings";
import Cookies from "js-cookie";

class API {
  private sessionExpired = false; // Flag to track session expiration

  private async request<T = any>(
    method: APIMethod,
    resource: string, //url endpoint
    { data, useToken = false }: APIOptions = {}
  ): Promise<APIResponse<T>> {
    try {
      const queryString =
        method === "GET" && data
          ? "?" + new URLSearchParams(data).toString()
          : "";

      const headers: HeadersInit = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      if (useToken) {
        const tokenApi = Cookies.get("accessToken");
        if (tokenApi) {
          headers.Authorization = `Bearer ${tokenApi}`;
        } else {
          throw new Error("No access token available");
        }
      }

      const response = await fetch(`${urls.apiBase}${resource}${queryString}`, {
        method,
        mode: "cors",
        headers,
        body: method !== "GET" ? JSON.stringify(data) : null,
      });

      const resp: APIResponse<T> = await response.json();

      // Check if session has expired (data === "901")
      if (resp.data === "901" && !this.sessionExpired) {
        this.sessionExpired = true; // Set the flag to true to prevent further toasts
        const user = useUserStore.getState();
        disconnect(config);
        user.setUser({ web3_address: zeroAddress });
        toast.warning("Login Session Expired... Please login again");
      }

      return resp;
    } catch (err) {
      console.error("API call error:", err);
      throw err;
    }
  }

  public get<T = any>(
    resource: string,
    options?: APIOptions
  ): Promise<APIResponse<T>> {
    return this.request("GET", resource, options);
  }

  public post<T = any>(
    resource: string,
    options?: APIOptions
  ): Promise<APIResponse<T>> {
    return this.request("POST", resource, options);
  }

  public put<T = any>(
    resource: string,
    options?: APIOptions
  ): Promise<APIResponse<T>> {
    return this.request("PUT", resource, options);
  }

  public delete<T = any>(
    resource: string,
    options?: APIOptions
  ): Promise<APIResponse<T>> {
    return this.request("DELETE", resource, options);
  }

  // Optionally, you can add a method to reset the sessionExpired flag, if needed.
  public resetSessionExpired() {
    this.sessionExpired = false;
  }
}

export const api = new API();
