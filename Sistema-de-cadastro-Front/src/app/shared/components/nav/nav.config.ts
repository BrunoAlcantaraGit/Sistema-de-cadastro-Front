import { Title } from "@angular/platform-browser";
import { NavData } from "../../models/navData.models";

export const CONFIG:NavData[] = [
   
    {
        routeURL:'/home',
        icon:'donut_small',
        title:'Home'
    },
   
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
    {
        routeURL:'/envolvidos',
        icon:'account_box',
        title:'Envolvido'
    }

    

]