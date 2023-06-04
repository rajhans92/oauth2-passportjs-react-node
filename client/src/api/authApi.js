

let authentication = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      }).then(responseJson => {
        console.log("responseJson => ",responseJson.status);
        return responseJson.status;
      }).catch((error) => {
        console.log(" error ", error);
        return false;
      })
};

export {authentication};