import fs from "fs";

class FileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getAll() { // Leemos el archivo JSON
        try {
            const data = await fs.promises.readFile(this.filePath); // Busca la ruta del archivo JSON
            return JSON.parse(data); // Parsea la data
        } catch (error) {
            throw error;
        }
    }

    async writeAll(data) { // Método para sobreescribir archivo
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify(data)); //Sintaxis => ("ruta", "archivo para sobreescirbir")
        } catch (error) {
            throw error;
        }
    }

};

class ProductFileManager extends FileManager {
    async addElement(product) {
        try {

            const products = await this.getAll(); // Creamos un arreglo y lo llenamos con la info del JSON
            
            product.id = products.length + 1;

            products.push(product);  // Agregamos al arreglo el producto recibido por parametro y el id generado.

            await this.writeAll(products); // Llamamos a la funcion para sobresccribir y enviamos el arreglo para agregar.

        } catch (error) {
            throw error;
        }
    }

    async deleteElement(productId) {
        try {
            const products = await this.getAll();

            const index = products.findIndex((product) => product.id == productId); // Comprobamos que el id recibido por parametro este en el arreglo

            products.splice(index, 1); // Eliminamos el producto con el id.

            await this.writeAll(products);
        } catch (error) {
            throw error;
        }
    }
};

export { FileManager, ProductFileManager };