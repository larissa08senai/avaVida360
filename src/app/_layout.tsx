import { Stack } from "expo-router";

export default function Layout(){
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: 'Login'}} />
      <Stack.Screen
        name="cadastro"
        options={{ title: 'Cadastro'}}/>
      <Stack.Screen
        name="logado"
        options={{title: 'Área Logada', headerBackVisible: false}} />
    </Stack>
  )
}
