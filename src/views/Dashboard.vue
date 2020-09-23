<template>
	<div id="dashboard">
		<section>
			<!-- New -->
			<div class="col1">
				<div class="profile">
					<h5>{{ userProfile.name }}</h5>
					<div class="create-post">
						<p>create a post</p>
						<form @submit.prevent>
							<textarea v-model.trim="post.content"></textarea>
							<button @click="createPost()" :disabled="post.content === ''" class="button">post</button>
						</form>
					</div>
				</div>
			</div>

			<!-- Posts -->
			<div class="col2">
				<div v-if="posts.length">
					<div v-for="post in posts" :key="post.id" class="post">
						<span>{{ post.createdOn | formatDate }}</span>
						<p>{{ post.content | trimLength }}</p>
						<ul>
							<li>
								<a @click="viewPost(post)">view full post</a>
							</li>
							<li>
								<a @click="copyToClipboard(post)">copy to clipboard</a>
							</li>
						</ul>
					</div>
				</div>
				<div v-else>
					<p class="no-results">There are currently no posts</p>
				</div>
			</div>
			
		</section>

		<!-- full post modal -->
		<transition name="fade">
			<div v-if="showPostModal" class="p-modal">
				<div class="p-container">
					<a @click="closePostModal()" class="close">close</a>
					<div class="post">
						<h5>{{ fullPost.userName }}</h5>
						<span>{{ fullPost.createdOn | formatDate }}</span>
						<p>{{ fullPost.content }}</p>
						<ul>
							<li><a>comments</a></li>
							<li><a>likes</a></li>
						</ul>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
	data() {
		return {
			post: {
				content: "",
			},
			selectedPost: {},
			showPostModal: false,
			fullPost: {},
		};
	},
	computed: {
		...mapState(["userProfile", "posts"]),
	},
	methods: {
		copyToClipboard(post){
			document.addEventListener('copy', function(e) {
				e.clipboardData.setData('text/plain', post.content);
				e.preventDefault();
			});
			document.execCommand('copy')
		},
		createPost() {
			this.$store.dispatch("createPost", { content: this.post.content });
			this.post.content = "";
		},
		async viewPost(post) {	
			this.fullPost = post;
			this.showPostModal = true;
		},
		closePostModal() {
			this.showPostModal = false;
		},
	},
	filters: {
		formatDate(val) {
			if (!val) {
				return "-";
			}

			let date = val.toDate();
			return moment(date).fromNow();
		},
		trimLength(val) {
			if (val.length < 200) {
				return val;
			}
			return `${val.substring(0, 200)}...`;
		},
	},
};
</script>
<style lang="scss" scoped>
</style>
