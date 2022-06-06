const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    },
    clear:function () {
        return Promise.resolve().then(function () {
            return localStorage.clear();
        });
    }
    
};
export default asyncLocalStorage;