import React from "react";

class LocalStorage {
    static saveData(key, data) 
    {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getData(key) 
    {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    static removeData(key) 
    {
        localStorage.removeItem(key);
    }
}

export default LocalStorage;
