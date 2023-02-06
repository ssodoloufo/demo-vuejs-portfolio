<script>
	export default {
		data: () => {
			return {
				copyrightDate: new Date().getFullYear(),
				projectName: 'Portfolio réalisé en VueJs & TailwindCSS',
				author: 'Arius D. Sodoloufo',
			};
		},
	};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
			<span class="font-general-medium hover:text-yellow-600 dark:hover:text-yellow-300 duration-500">
				{{ projectName }}
			</span>
			<br> &copy; {{ copyrightDate }} ⋅
			<span class="font-general-medium text-secondary-dark dark:text-secondary-light hover:text-yellow-600 dark:hover:text-yellow-300 duration-500">
				{{ author }}
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
