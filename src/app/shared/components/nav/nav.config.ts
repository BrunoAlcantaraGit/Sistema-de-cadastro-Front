import { Title } from "@angular/platform-browser";
import { NavData } from "../../models/navData.models";

export const CONFIG:NavData[] = [
    {
        routeURL:'/clientes',
        icon:'account_circle',
        title: 'Clientes'
    },

    {
        routeURL:'/veiculo',
        icon:'local_shipping',
        title:'Veiculo'
    },

]