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
import PokemonEdit from "./pages/PokemonEdit";
import { fetchApi, sendPokemon } from "./services/api.service";

const basePokemonUrl = "/api/pokemons";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <PokemonList />,
        loader: () => fetchApi(basePokemonUrl),
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");
          const imageUrl = formData.get("imageUrl");

          await sendPokemon(
            basePokemonUrl,
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
        loader: ({ params }) => fetchApi(`${basePokemonUrl}/${params.id}`),
      },
      {
        path: "/pokemon",
        element: <PokemonAdd />,
        loader: () => fetchApi("/api/types"),
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");
          const imageUrl = formData.get("imageUrl");
          const numberPokedex = formData.get("numberPokedex");
          const type = formData.get("type");

          await sendPokemon(
            basePokemonUrl,
            {
              name,
              imageUrl,
              numberPokedex,
              type,
            },
            request.method.toUpperCase()
          );

          return redirect(`/`);
        },
      },
      {
        path: "/pokemon/edition/:id",
        element: <PokemonEdit />,
        loader: async ({ params }) => {
          const pokemonPromise = fetchApi(`${basePokemonUrl}/${params.id}`);
          const typesPromise = fetchApi("/api/types");

          const [pokemon, types] = await Promise.all([
            pokemonPromise,
            typesPromise,
          ]);

          return { pokemon, types };
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();

          const name = formData.get("name");
          const imageUrl = formData.get("imageUrl");
          const numberPokedex = formData.get("numberPokedex");
          const type = formData.get("type");

          switch (request.method.toUpperCase()) {
            case "PUT": {
              await sendPokemon(
                `${basePokemonUrl}/${params.id}`,
                {
                  name,
                  imageUrl,
                  numberPokedex,
                  type,
                },
                request.method.toUpperCase()
              );

              return redirect(`/`);
            }

            case "DELETE": {
              await sendPokemon(
                `${basePokemonUrl}/${params.id}`,
                {
                  name,
                  imageUrl,
                  numberPokedex,
                  type,
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
