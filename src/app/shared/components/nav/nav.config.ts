import { Title } from "@angular/platform-browser";
import { NavData } from "../../models/navData.models";

export const CONFIG:NavData[] = [
    {
        routeURL:'/clientes',
        icon:'person',
        title: 'Clientes'
    },

    {
        routeURL:'/restaurantes',
        icon:'local_shipping',
        title:'Veiculo'
    },

]