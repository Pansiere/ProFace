import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        height: 80, // aumenta a altura total da barra
        paddingVertical: 10, // adiciona espaçamento interno vertical
      },
      tabBarItemStyle: {
        marginTop: 10, // ajusta a posição dos ícones individualmente
      },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <Ionicons name="home" size={30} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <Ionicons name="people" size={30} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="configuracoes"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <Ionicons name="settings" size={30} color={color}/>
          ),
        }}
      />
    </Tabs>
  );
}
