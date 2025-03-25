import type {Route} from "./+types/home";
import {Welcome} from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New Playground App"},
        {name: "description", content: "Welcome to Playground!"},
    ];
}

export function loader({context}: Route.LoaderArgs) {
    return {message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE};
}

export default function Home({loaderData}: Route.ComponentProps) {
    return <Welcome message={loaderData.message}/>;
}
