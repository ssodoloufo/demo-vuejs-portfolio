<script>
import Button from '../reusable/Button.vue';
export default { components: { Button } };
</script>

<template>
	<div class="w-full md:w-2/3">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-primary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl uppercase mb-8"
			>
				Envoie de message
			</p>
			<form action="#" class="font-general-regular space-y-7">
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="name"
						>Prénom & Nom</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-light dark:text-secondary-light bg-ternary-light dark:bg-primary-dark rounded-md shadow-sm text-md"
						id="name"
						name="name"
						type="text"
						required=""
						placeholder="entrer votre nom"
						aria-label="Name"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="email"
						>Adresse mail</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-light dark:text-secondary-light bg-ternary-light dark:bg-primary-dark rounded-md shadow-sm text-md"
						id="email"
						name="email"
						type="text"
						required=""
						placeholder="entrer votre email"
						aria-label="Email"
					/>
				</div>
				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="subject"
						>Objet</label
					>
					<input
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-light dark:text-secondary-light bg-ternary-light dark:bg-primary-dark rounded-md shadow-sm text-md"
						id="subject"
						name="subject"
						type="text"
						required=""
						placeholder="Quel est le motif ?"
						aria-label="Subject"
					/>
				</div>

				<div>
					<label
						class="block text-lg text-primary-dark dark:text-primary-light mb-2"
						for="message"
						>Message</label
					>
					<textarea
						class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-light dark:text-secondary-light bg-ternary-light dark:bg-primary-dark rounded-md shadow-sm text-md"
						id="message"
						name="message"
						cols="14"
						rows="3"
						required=""
						placeholder="@contenu"
						aria-label="Message"
					></textarea>
				</div>

				<div>
					<Button
						title="Envoyer"
						class="w-full px-4 py-2.5 text-white tracking-wider bg-yellow-500 hover:bg-yellow-600 focus:ring-1 focus:ring-yellow-900 rounded-lg duration-500"
						type="submit"
						aria-label="Send Message"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
