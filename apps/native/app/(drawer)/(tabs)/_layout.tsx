import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/tabbar-icon";
import { useColorScheme } from "@/lib/use-color-scheme";

export default function TabLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDarkColorScheme
          ? "hsl(217.2 91.2% 59.8%)"
          : "hsl(221.2 83.2% 53.3%)",
        tabBarInactiveTintColor: isDarkColorScheme
          ? "hsl(215 20.2% 65.1%)"
          : "hsl(215.4 16.3% 46.9%)",
        tabBarStyle: {
          backgroundColor: isDarkColorScheme
            ? "hsl(222.2 84% 4.9%)"
            : "hsl(0 0% 100%)",
          borderTopColor: isDarkColorScheme
            ? "hsl(217.2 32.6% 17.5%)"
            : "hsl(214.3 31.8% 91.4%)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Serviços",
          tabBarIcon: ({ color }) => <TabBarIcon name="cogs" color={color} />,
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfólio",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="briefcase" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contato",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="envelope" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
