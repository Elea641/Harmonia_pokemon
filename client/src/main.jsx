import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./pages/PokemonDetails";
import PokemonAdd from "./pages/PokemonAdd";
import { fetchApi, sendPokemon } from "./services/api.service";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PokemonList />,
        loader: () => fetchApi(`${import.meta.env.VITE_API_URL}/api/pokemons`),
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");
          const imageUrl = formData.get("imageUrl");

          await sendPokemon(
            `${import.meta.env.VITE_API_URL}/api/pokemons`,
            {
              name,
              imageUrl,
            },
            request.method.toUpperCase()
          );

          return redirect(`/`);
        },
      },
      {
        path: "/:id",
        element: <PokemonDetails />,
        loader: ({ params }) =>
          fetchApi(`${import.meta.env.VITE_API_URL}/api/pokemons/${params.id}`),
      },
      {
        path: "/pokemon",
        element: <PokemonAdd />,
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");
          const imageUrl = formData.get("imageUrl");

          await sendPokemon(
            `${import.meta.env.VITE_API_URL}/api/pokemons`,
            {
              name,
              imageUrl,
            },
            request.method.toUpperCase()
          );

          return redirect(`/`);
        },
      },
      {
        path: "/pokemon/edition/:id",
        element: <PokemonDetails />,
        loader: ({ params }) =>
          fetchApi(`${import.meta.env.VITE_API_URL}/api/pokemons/${params.id}`),

        action: async ({ request, params }) => {
          const formData = await request.formData();

          const name = formData.get("name");
          const imageUrl = formData.get("imageUrl");

          switch (request.method.toUpperCase()) {
            case "PUT": {
              await sendPokemon(
                `${import.meta.env.VITE_API_URL}/api/pokemons/${params.id}`,
                {
                  name,
                  imageUrl,
                },
                request.method.toUpperCase()
              );

              return redirect(`/`);
            }

            case "DELETE": {
              await sendPokemon(
                `${import.meta.env.VITE_API_URL}/api/pokemons/${params.id}`,
                {
                  name,
                  imageUrl,
                },
                request.method.toUpperCase()
              );
              return redirect(`/`);
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
