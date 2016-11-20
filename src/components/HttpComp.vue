<template>
	<div>
		<div class="form-group"><label for="name">Name</label><input type="text" class="form-control" id="name" v-model="user.name"></div>
		<div class="form-group"><label for="mail">Mail</label><input type="text" class="form-control" id="mail" v-model="user.mail"></div>
		<button class="btn btn-primary" @click="onSubmit">Send</button>
		<hr>
		<button class="btn btn-primary" @click="getUsers">Get</button>
		<ul class="list-group">
			<li class="list-group-item" v-for="u in users">{{u.name}} - {{u.mail}}</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				user: {
					name: '',
					mail: ''
				},
				users: []
			}
		},
		methods: {
			onSubmit(){
				this.$http.post('', this.user)
					.then(
						res => console.log(res),
						err => console.error(err)
					)
			},
			getUsers(){
				this.$http.get('')
					.then(res => res.json())
					.then(data => {
						const arr = [];
						for(let d in data)
							arr.push(data[d])
						this.users = arr
					})
			}
		}
	}
</script>
