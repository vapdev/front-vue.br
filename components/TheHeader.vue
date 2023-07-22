<script setup>
const { logedIn } = useUserStore();
</script>
<template>
	<div class="navbar bg-base-100">
		<div class="dropdown mr-auto">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
				</svg>
			</label>
			<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a>Comprados</a></li>
				<li>
					<a>Categorias</a>
					<ul class="p-2">
						<li><a>Popular</a></li>
						<li><a>Mais Assistido</a></li>
						<li><a>Recentes</a></li>
					</ul>
				</li>
				<li><a>Assistidos</a></li>
			</ul>
		</div>
		<div class="flex-1">
			<a class="relative btn btn-ghost normal-case text-xl w-10">
				<span class="absolute text-5xl font-extrabold text-green-500">V</span>
				<span class="absolute text-4xl font-bold top-0 text-yellow-500">V</span>
			</a>
			<span class="font-semibold mt-auto mr-4">BR</span>
			<ul class="menu menu-horizontal px-1 mr-auto">
				<li><a>Comprados</a></li>
				<li tabindex="0">
					<details>
						<summary>Categorias</summary>
						<ul class="p-2">
							<li><a>Popular</a></li>
							<li><a>Mais Assistido</a></li>
							<li><a>Recentes</a></li>
						</ul>
					</details>
				</li>
				<li><a>Assistidos</a></li>
			</ul>
		</div>
		<div class="flex-none gap-2">
			<div class="form-control">
				<div class="join">
					<input type="text" placeholder="Search" class="input input-bordered input-sm w-24 md:w-auto join-item" />
					<button class="btn btn-sm join-item">
						<Icon class="text-xl text-neutral-500" name="ic:baseline-search" />
					</button>
				</div>
			</div>
			<div v-if="logedIn">
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full bg-black">
							<!-- <img src="" /> -->
						</div>
					</label>
					<ul tabindex="0" class="flex mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box ">
						<li class="text-red-500"><a>Logout
							<Icon class="text-xl text-red-500" name="ic:baseline-log-in" />
						</a></li>
					</ul>
				</div>
			</div>
			<div v-else>
				<div class="btn btn-ghost btn-circle">
					Cadastre-se
				</div>
				<div class="btn btn-primary btn-circle">
					Login
				</div>
			</div>
		</div>
	</div>
</template>