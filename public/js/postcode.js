// Hashtable class to store key-value pairs
class Hashtable {
    constructor() {
        this.table = {};
    }

    set(key, value) {
        this.table[key] = value;
    }

    get(key) {
        return this.table[key];
    }

    has(key) {
        return this.table.hasOwnProperty(key);
    }
}

// Function to populate postCode data
function populatePostCode() {
    postCode.set("1000", "Brussel");
    postCode.set("2000", "Antwerpen");
    postCode.set("3000", "Leuven");
    // Voeg meer postcodes toe indien nodig
}

// Function to populate postCodeYear data
function populatePostCodeYear() {
    postCodeYear.set("1000", "2023");
    postCodeYear.set("2000", "2023");
    postCodeYear.set("3000", "2023");
    // Voeg meer postcodes en jaren toe indien nodig
}

// Export the functions and Hashtable class
export { Hashtable, populatePostCode, populatePostCodeYear };
