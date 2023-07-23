<script setup>
const modalRef = ref(null);

defineExpose({
	openModal() {
		modalRef.value.showModal();
	},
	closeModal() {
		modalRef.value.close();
	},
});
</script>
<template>
	<dialog :ref="modalRef" class="modal">
		<form method="dialog" class="modal-box">
			<slot name="header"></slot>
			<slot name="body"></slot>
			<slot name="footer"></slot>
		</form>
	</dialog>
</template>