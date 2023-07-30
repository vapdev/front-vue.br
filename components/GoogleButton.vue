
<script setup lang="ts">
import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin';

const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("access token: " + credential);
};

const handleLoginError = () => {
  console.log('login failed');
};

</script>

<template>
  <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
</template>
