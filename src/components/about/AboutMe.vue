<script>
	export default {
		setup() {
			return {
				bios: [
					{
						id: 1,
						bio: `Suite à une formation initiale des réseaux télécoms où j'ai décroché mon BTS et ma licence professionnelle, je me suis trouver une passion pour le développement Web.`,
					},
					{
						id: 2,
						bio: `
							Autodidacte, avec beaucoup d’abnégation et de rigueur, j’ai appris suite à des formations la conception graphique, l'administration de bases de données,
							puis acquis les compétences nécessaires pour comprendre les exigences des clients afin de leur offrir le travail approprié.`,
					},
					{
						id: 3,
						bio: `Pour terminer, bien que télécom de base, je suis surtout développeur web sur des technologie comme Laravel, VueJs et Angular... Et toujours à l'écoute pour apprendre de nouvelles choses.`,
					},
				],
			};
		},
	};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img src="@/assets/images/profile.jpg" class="rounded-xl w-56" alt="" />
			<div class="py-3">
				<h1 class="font-general-semibold text-3xl md:text-3xl xl:text-2xl text-center text-ternary-dark dark:text-primary-light">
					Arius D. Sodoloufo
				</h1>
				<p class="mt-2 font-general-medium text-lg sm:text-xl  xl:text-1xl text-center leading-none text-gray-400">
					Développeur Web.
				</p>
			</div>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p v-for="bio in bios" :key="bio.id" class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg">
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
