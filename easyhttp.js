class EasyHTTP {
  // GET Request
  async get(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch(error) {
      throw new Error(error);
    }
  }

  // POST Request
  async post(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch(error) {
      throw new Error(error);
    }

  }

  // PUT Request
  async put(url, data) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    } catch(error) {
      throw new Error(error);
    }
  }

  // DELETE Request
  async delete(url) {
    try {
      const response = await fetch(url)
      return await response.json();
    } catch(error) {
      throw new Error(error);
    }
  }
}


