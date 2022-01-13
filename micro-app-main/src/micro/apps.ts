interface App {
    name: string,
    entry: string,
    container: string,
    activeRule: string,
    [propName: string]: string
}
const apps:Array<App> = [
    {
        name: "VueMicroApp",
        entry: "//localhost:10200",
        container: "#frame",
        activeRule: "/vue",
    }
]

export default apps