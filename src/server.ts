import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true}); //criei um server e passei ordens
 server.register(cors, {
    origin: "*"
 })

const teams = [
    {id: 1, name: "Ferrari", base: "Maranello, Itália"},
    {id: 2, name: "Mercedes", base: "Brackley, Reino Unido"},
    {id: 3, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido"},
    {id: 4, name: "McLaren", base: "Woking, Reino Unido"},
    {id: 5, name: "Alpine", base: "Enstone, Reino Unido"},
    {id: 6, name: "Aston Martin", base: "Silverstone, Reino Unido"},
    {id: 7, name: "Williams", base: "Grove, Reino Unido"},
    {id: 8, name: "AlphaTauri", base: "Faenza, Itália"},
    {id: 9, name: "Alfa Romeo", base: "Hinwil, Suíça"},
    {id: 10, name: "Haas", base: "Kannapolis, Estados Unidos"}
];


const drivers = [
    {id: 1, name: "Charles Leclerc", team: "Ferrari"},
    {id: 2, name: "Lance Stroll", team: "Aston Martin"},
    {id: 3, name: "Sergio Perez", team: "Red Bull Racing"},
    {id: 4, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 5, name: "Lewis Hamilton", team: "Mercedes"},
    {id: 6, name: "George Russell", team: "Mercedes"},
    {id: 7, name: "Carlos Sainz", team: "Ferrari"},
    {id: 8, name: "Lando Norris", team: "McLaren"},
    {id: 9, name: "Oscar Piastri", team: "McLaren"},
    {id: 10, name: "Pierre Gasly", team: "Alpine"},
    {id: 11, name: "Esteban Ocon", team: "Alpine"},
    {id: 12, name: "Fernando Alonso", team: "Aston Martin"},
    {id: 13, name: "Valtteri Bottas", team: "Alfa Romeo"},
    {id: 14, name: "Zhou Guanyu", team: "Alfa Romeo"},
    {id: 15, name: "Yuki Tsunoda", team: "AlphaTauri"},
    {id: 16, name: "Daniel Ricciardo", team: "AlphaTauri"},
    {id: 17, name: "Kevin Magnussen", team: "Haas"},
    {id: 18, name: "Nico Hulkenberg", team: "Haas"},
    {id: 19, name: "Alexander Albon", team: "Williams"},
    {id: 20, name: "Logan Sargeant", team: "Williams"}
];


server.get("/teams", async(request, response) => {
    response.type ("application.json").code(200)
    return {teams}
})

server.get("/drivers", async(request, response) => {
    response.type ("application.json").code(200)
    return {drivers}
})

interface DriverParams {
    id: string;
}

server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id)

    if (!driver) {
        response.type("application/json").code(404);
        return {message: "driver not found"}
    }
    else {
        response.type("application/json").code(200);
        return {driver}
    }
})

server.listen({port: 3333}, () => {
    console.log("server init");
})

