// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'CRUD - Laravel & Livewire',
		category: 'Application Web',
		img: require('@/assets/images/crud_laravel_livewire.jpg'),
	},
	{
		id: 2,
		title: 'Sondage, VueJs & Laravel',
		category: 'Application Web',
		img: require('@/assets/images/sondage_vuejs_laravel.jpg'),
	},
	// {
	// 	id: 3,
	// 	title: 'Project Management UI',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-1.jpg'),
	// },
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Application Mobile',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Application Web',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
