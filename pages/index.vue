<template>
	<div
	style="position: relative; height: 100vh; z-index: 1"
	class="bg2 accent--text">
		<!-- Skewed background -->
		<div id="bg__1" class="bg1"></div>

		<!-- Mobile layout not yet done - Snackbar -->
		<v-snackbar
		shaped timeout="-1" color="primary"
		transition="scroll-y-transition"
		class="mb-5"
		v-model="snackbar">
			Mobile layout still in development.
			<template v-slot:action="{ attrs }">
				<v-btn
				color="yellow"
				text
				rounded
				v-bind="attrs"
				@click="snackbar = false">
					Alright
				</v-btn>
			</template>
		</v-snackbar>
		
		<!-- Main Content -->
		<div
		class="d-flex flex-row justify-center align-center"
		style="min-height: 100vh">
			<div class="d-flex flex-wrap-reverse justify-center ma-16">
				<!-- Card -->
				<div
				class="white"
				style="height: 600px; width: 400px; position: relative;">
					<div class="ma-10">
						<v-tabs
						color="accent"
						fixed-tabs
						v-model="tab">
							<v-tab>About Me</v-tab>
							<v-tab>Projects</v-tab>
						</v-tabs>
						<v-tabs-items v-model="tab">
							<!-- About Me Content -->
							<v-tab-item>
								<p class="px-7 pt-10 text-center text-h4 font-weight-bold primary--text">
									Filip<br />Toma
								</p>
								<div class="divider"></div>
								<p class="px-7 py-4 text-center occupation primary--text">
									WEB DEVELOPER
								</p>
								<p class="px-7 py-4 text-center text-body-1 font-weight-light">
									I am a young fullstack web developer and also a computer science student at Masaryk University, Brno.
									<br />
									I also take interest in IoT devices, Python scripting and ethical hacking.
								</p>
							</v-tab-item>
							<!-- Projects Content -->
							<v-tab-item class="pa-4">
								<div
								v-for="(project, index) in projects" :key="index"
								class="my-4">
									<div class="d-flex justify-space-between py-4">
										<div>
											<span class="text-caption grey--text text--lighten-1">
												{{ project.stack }}
											</span>
											<p class="font-weight-medium text-h6">
												{{ project.title }}
											</p>
										</div>
										<v-btn
										tile depressed small
										class="align-self-center"
										type="a" :href="project.code" target="_blank">
											Code
										</v-btn>
									</div>
									<v-divider v-if="index < projects.length - 1" />
								</div>
							</v-tab-item>
						</v-tabs-items>
					</div>
					<!-- Download CV button -->
					<v-btn
					color="grey lighten-3"
					height="60px"
					block depressed tile elevation
					style="position: absolute; bottom: 0;"
					type="a" href="cv-2021.pdf" download>
						Download CV
					</v-btn>
				</div>
				<!-- Greeting -->
				<div class="ma-16">
					<p class="greeting primary--text">
						HI, I'M FILIP.
					</p>
					<p class="text-h5 font-weight-medium">
						Let's
						<span class="font-italic text-decoration-underline">work together.</span>
					</p>
				</div>
			</div>
		</div>

		<!-- Contact -->
		<div
		style="position: absolute; right: 0; top: 0; user-select: none;"
		class="d-flex flex-column mt-10 mr-16">
			<client-only>
				<v-btn
				icon large
				type="a" href="https://www.facebook.com/filipt0ma/" target="_blank"
				class="my-3">
					<unicon fill="#212121" name="facebook-f" />
				</v-btn>
				<v-btn
				icon large
				type="a" href="https://twitter.com/filiptoma_/" target="_blank"
				class="my-3">
					<unicon fill="#212121" name="twitter-alt" />
				</v-btn>
				<v-btn
				icon large
				type="a" href="https://www.linkedin.com/in/filip-toma-7283b71a1/" target="_blank"
				class="my-3">
					<unicon fill="#212121" name="linkedin-alt" />
				</v-btn>
				<v-btn
				icon large
				type="a" href="https://github.com/filiptoma/" target="_blank"
				class="my-3">
					<unicon fill="#212121" name="github-alt" />
				</v-btn>
			</client-only>
		</div>

		<!-- Footer -->
		<div
		class="mx-6"
		style="position: absolute; left: 0; bottom: 0;">
			<p class="text-caption font-weight-bold">FILIP TOMA 2021</p>
		</div>
	</div>
</template>

<script>
const projects = [
	{
		title: 'MySpot',
		stack: 'JavaScript',
		code: 'https://github.com/filiptoma/myspot'
	},
	{
		title: 'Graph App',
		stack: 'Python',
		code: 'https://github.com/filiptoma/graph-app'
	},
	{
		title: 'SlovnaftBajk Map',
		stack: 'Python',
		code: 'https://github.com/filiptoma/slovnaftbike'
	}
]


export default {
	head () {
		return {
			title: 'Home'
		}
	},
	data () {
		return {
			tab: null,
			projects,
			snackbar: true
		}
	}
}
</script>

<style scoped>
#bg__1 {
	z-index: -1;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	transform: skewY(25deg);
	transform-origin: top right;
}

.divider {
	width: 40px;
	height: 2px;
	margin: auto;
	background-color: rgb(53, 53, 235);
}

.occupation {
	font-weight: 300;
	letter-spacing: 7px;
}

.greeting {
	font-weight: 900;
	font-size: 4rem;
	letter-spacing: 5px;
}
</style>
