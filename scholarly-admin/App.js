import React from 'react';
import { AuthProvider } from './context/AuthContext'; // Makes sure we can access authentication state everywhere in the app.
import AppNavigator from './AppNavigator'; // Handles app navigation and tells which screen to show.

export default function App() {
  return (
    <AuthProvider>  {/* Makes authentication state available to all parts of the app */}
      <AppNavigator />  {/* This handles screen navigation */}
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
