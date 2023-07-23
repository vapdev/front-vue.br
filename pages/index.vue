<script setup lang="ts">
import {
	GoogleSignInButton,
	type CredentialResponse,
} from 'vue3-google-signin';

const handleLoginSuccess = (response: CredentialResponse) => {
	const { credential } = response;
	console.log("access token: " + credential);
};

const handleLoginError = () => {
	console.log('logi failed');
};

</script>
<template>
	<div class="flex flex-col h-screen w-full justify-between">
		<div class="flex flex-col h-1/3 mx-6">
			<TheHeader />
		</div>
		<GoogleSignInButton
			@success="handleLoginSuccess"
			@error="handleLoginError"
		></GoogleSignInButton>
		<div class="flex">
			<NuxtPage />
		</div>
	</div>
</template>