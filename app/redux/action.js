import { setUser } from "./reducer";

export const fetchUser = () => async (dispatch) => {
  try {
    // Fetch user data from the server
    const response = await fetch("http://localhost:5000/api/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        "Failed to fetch user data:",
        response.status,
        response.statusText
      );
      return;
    }

    if (contentType && contentType.includes("application/json")) {
      const userData = await response.json();

      // Dispatch action to set user in Redux store
      dispatch(setUser(userData));
    } else {
      console.error("Unexpected response content type:", contentType);
    }
  } catch (error) {
    console.error("Error fetching user data", error);
  }
};
