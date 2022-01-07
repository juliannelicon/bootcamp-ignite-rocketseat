import { parseCookies } from "nookies";

import { useContext, useEffect } from "react";

import { AuthContext } from "../contexts/AuthContext";

import { setupApiClient } from "../services/api";

import { api } from "../services/apiClient";

import { withSSRAuth } from "../utils/withSSRAuth";

import { Can } from "../components/Can"

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    if(token) {
      api.get('/me')
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  }, []);

  return (
    <>
      <h1>dashboard {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  )
}

export const getServerSideProps = withSSRAuth( async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await apiClient.get('/me')


  return {
    props: {}
  }
})