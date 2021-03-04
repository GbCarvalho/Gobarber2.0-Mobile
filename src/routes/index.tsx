import React from "react";

import { useAuth } from "../hooks/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { ActivityIndicator, View } from "react-native";

const routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  if (user) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default routes;
