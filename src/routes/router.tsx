import React from "react";

export const ProtectedRoute = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <>{children}</>;
};

export const PublicRoute = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};
