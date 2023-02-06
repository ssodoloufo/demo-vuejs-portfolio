<script>
	import feather from 'feather-icons';
	import FooterCopyright from './FooterCopyright.vue';
	export default {
		components: { FooterCopyright },
		data() {
			return {
				socials: [
					{
						id: 0,
						name: 'LinkedIn',
						icon: 'linkedin',
						url: 'https://www.linkedin.com/in/ssodoloufo',
					},
					{
						id: 1,
						name: 'GitHub',
						icon: 'github',
						url: 'https://github.com/ssodoloufo',
					},
					{
						id: 2,
						name: 'Twitter',
						icon: 'twitter',
						url: 'https://twitter.com/ssodoloufo',
					},
				],
			};
		},
		mounted() {
			feather.replace();
		},
		updated() {
			feather.replace();
		},
	};
</script>

<template>
	<div class="container mx-auto ">
		<div class="pt-10 sm:pt-10 pb-4 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
			<!-- Footer social links -->
			<div class="flex flex-col justify-center items-center mb-6 sm:mb-10">
				<p class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
					Suivez-Nous
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a v-for="social in socials" :key="social.id" :href="social.url" target="__blank" class="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500">
						<i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
					</a>
				</ul>
			</div>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped></style>
