<template>
	<div id="wrap">
		<section id="intro">
			<div class="intro_text">
				<h1>출조 준비 되셨나요?</h1>
			</div>
			<div class="intro_search_box">

			</div>
		</section>
		<section id="category">
			<div class="category_title">
				<h3>카테고리</h3>
			</div>
			<div class="category_container">
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon1.png" alt="카테고리 아이콘 선상낚시" class="category_icon">
							<p>선상 낚시</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon2.png" alt="카테고리 아이콘 체험낚시" class="category_icon">
							<p>체험 낚시</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon3.png" alt="카테고리 아이콘 좌대낚시" class="category_icon">
							<p>좌대 낚시</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon4.png" alt="카테고리 아이콘 낚시배우기" class="category_icon">
							<p>낚시 배우기</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon5.png" alt="카테고리 아이콘 민물낚시" class="category_icon">
							<p>민물 낚시</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon6.png" alt="카테고리 아이콘 낚시포인트" class="category_icon">
							<p>낚시 포인트</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon7.png" alt="카테고리 아이콘 대회" class="category_icon">
							<p>낚시 대회</p>
						</div>
					</div>
				</div>
				<div class="category_item_wrap">
					<div class="category_item">
						<div class="category_div">
							<img src="@/assets/images/category_icon8.png" alt="카테고리 아이콘 이벤트" class="category_icon">
							<p>이벤트</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="hot_picks">
			<div class="hot_picks_title">
				<h3>지금 핫한 어종🔥</h3>
			</div>
			<div class="hot_picks_slide_wrap">
				<ul class="hot_picks_slide_container">
					<li class="slides">
						<div class="hot_picks_text">
							<strong>감성돔</strong><small>흘림/찌 낚시</small>
							<p>동해/남해</p>
						</div>
					</li>
					<li class="slides">
						<div class="hot_picks_text">
							<strong>갑오징어 / 쭈꾸미</strong><small>루어 낚시</small>
							<p>서해</p>
						</div>
					</li>
					<li class="slides">
						<div class="hot_picks_text">
							<strong>대삼치</strong><small>지깅/생미끼 낚시</small>
							<p>동해/남해</p>
						</div>
					</li>
					<li class="slides">
						<div class="hot_picks_text">
							<strong>농어</strong><small>루어/외수질 생미끼 낚시</small>
							<p>남해/서해</p>
						</div>
					</li>
					<li class="slides">
						<div class="hot_picks_text">
							<strong>참돔</strong><small>타이라바/생미끼 낚시</small>
							<p>남해/서해</p>
						</div>
					</li>
					<li class="slides">
						<div class="hot_picks_text">
							<strong>대광어</strong><small>다운샷/생미끼 낚시</small>
							<p>남해/서해</p>
						</div>
					</li>
				</ul>

				<div class="slide_control_container">
					<span class="prev"><i class="fa-solid fa-angle-left"></i></span>
					<span class="next"><i class="fa-solid fa-angle-right"></i></span>
				</div>
			</div>
		</section>
		<section id="banner">
			<div class="banner_container">
				<ul class="banner_slider">
					<li class="slides"></li>
					<li class="slides"></li>
					<li class="slides"></li>
				</ul>
				<div class="slide_control_container">
					<span class="banner_prev"><i class="fa-solid fa-angle-left"></i></span>
					<span class="banner_next"><i class="fa-solid fa-angle-right"></i></span>
				</div>
			</div>

		</section>
	</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { SlideAnimation } from '@/hooks/SlideAnimation.js';

export default {
	setup() {
		const selectFish = ref([]);
		const allFish = [
			{
				title: '인기어종',
				fishName: [
					{ id: 1, name: '모두 선택' },
					{ id: 2, name: '고등어' },
					{ id: 3, name: '전갱이' },
					{ id: 4, name: '삼치' },
					{ id: 5, name: '멧돼지' },
					{ id: 6, name: '는 최소연' }
				]
			},
			{
				title: '참돔류',
				fishName: [
					{ id: 7, name: '모두 선택' },
					{ id: 8, name: '참돔' },
					{ id: 9, name: '감성돔' },
					{ id: 10, name: '돌돔' }
				]
			},
			{
				title: '대표어종',
				fishName: [
					{ id: 11, name: '모든 선택' },
					{ id: 12, name: '우럭' },
					{ id: 13, name: '광어' },
					{ id: 14, name: '노래미' },
					{ id: 15, name: '농어' },
					{ id: 16, name: '삼치' },
					{ id: 17, name: '참돔' },
				]
			}
		];

		const showToggle = ref(false);

		const showAll = () => {
			showToggle.value = !showToggle.value;
		}

		const closeShowAll = () => {
			showToggle.value = !showToggle.value;
		}

		const submitForm = () => {
			console.log(selectFish.value);
			showToggle.value = false;
		}

		const updateSelectedFish = (event) => {
			const fishId = parseInt(event.target.value);

			if (event.target.checked) {
				selectFish.value.push(fishId);
			} else {
				// 선택 취소한 어종을 배열에서 제거
				const index = selectFish.value.indexOf(fishId);
				if (index !== -1) {
					selectFish.value.splice(index, 1);
				}
			}
		}

		const getSelectedFishNames = computed(() => {
			// 선택된 어종들의 이름을 문자열로 반환
			const selectedFishNames = selectFish.value.map((fishId) => {
				const fish = allFish
					.flatMap((fishGroup) => fishGroup.fishName)
					.find((fish) => fish.id === fishId);
				return fish ? fish.name : '';
			});

			return selectedFishNames.join(', ');
		});


		//SlideAnimation
		onMounted(() => {
			if(window.innerWidth > 1200) SlideAnimation('hot_picks_slide_container', 280, 20, 4, 'prev', 'next');

			SlideAnimation('banner_slider', 1200, 0, 1, 'banner_prev', 'banner_next');
		});

		return {
			selectFish,
			allFish,
			showAll,
			showToggle,
			closeShowAll,
			submitForm,
			updateSelectedFish,
			getSelectedFishNames
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/mixin.scss';

#wrap {
	width: 1200px;
	margin: 0 auto;

	@media (max-width: 1200px) {
		width: 100%;
	}

	#intro {
		width: 100%;
		height: 600px;
		background-image: url('@/assets/images/intro_bg.jpg');
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 30px;
		margin-top: 35px;
		padding-top: 100px;

		.intro_text {
			text-align: center;

			h1 {
				font-size: 70px;
				padding-top: 35px;

			}
		}

		.intro_search_box {
			width: 1000px;
			height: 200px;
			background-color: #fff;
			margin: 30px auto 0;
			border-radius: 10px;

			@media (max-width:1000px) {
				width: 100%;
			}
		}
	}

	#category {
		width: 100%;

		.category_title {

			h3 {
				font-weight: 700;
				line-height: 1.25;
				color: #0b0a12;
				font-size: 28px;
				margin: 15px 0 15px 13px;
			}
		}

		.category_container {
			display: flex;
			flex-wrap: wrap;
			margin-top: 30px;

			.category_item_wrap {
				width: 25%;
				height: 250px;
				margin-bottom: 15px;
				padding: 0 13px;

				.category_item {
					height: 100%;
					padding: 25px;
					border-radius: 20px;
					position: relative;


					&:hover {
						@include hover-efect;
					}

					.category_div {
						text-align: center;

						@include position-center;

						.category_icon {
							width: 150px;
						}

						p {
							font-size: 20px;
							font-weight: 500;
							color: #5f5f5f;
						}
					}
				}

				&:nth-child(1) .category_item {
					background-color: rgba(12, 188, 135, .1);
				}

				&:nth-child(2) .category_item {
					background-color: rgba(214, 41, 62, .1);
				}

				&:nth-child(3) .category_item {
					background-color: rgba(23, 162, 184, .1);
				}

				&:nth-child(4) .category_item {
					background-color: rgba(149, 184, 23, 0.1);
				}

				&:nth-child(5) .category_item {
					background-color: rgba(184, 23, 157, 0.1);
				}

				&:nth-child(6) .category_item {
					background-color: rgba(184, 74, 23, 0.1);
				}

				&:nth-child(7) .category_item {
					background-color: rgba(23, 39, 184, 0.1);
				}

				&:nth-child(8) .category_item {
					background-color: rgba(157, 23, 184, 0.1);
				}


				@media (max-width: 1200px) {
					height: 200px;

					.category_item {

						.category_div {

							.category_icon {
								width: 110px;
							}

							p {
								font-size: 18px;
							}
						}
					}
				}

				@media (max-width: 768px) {
					height: 150px;
					.category_item {

						.category_div {

							.category_icon {
								width: 90px;
							}

							p {
								font-size: 16px;
							}
						}
					}
				}
			}
		}
	}

	#hot_picks {
		width: 100%;

		.hot_picks_title {

			h3 {
				font-weight: 700;
				line-height: 1.25;
				color: #0b0a12;
				font-size: 28px;
				margin: 15px 0 15px 13px;
			}
		}

		.hot_picks_slide_wrap {
			width: 100%;
			height: 600px;
			position: relative;
			overflow: hidden;

			.hot_picks_slide_container {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				transition: .3s;
				margin: 15px 10px 0 10px;
				touch-action: pan-x;

				@media (max-width:1200px) {
					margin-left: 15px;
				}
				
				.slides {
					width: 280px;
					height: 350px;
					float: left;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 20px;
					position: relative;

					&:hover {
						@include hover-efect;
					}

					&:not(:last-child) {
						margin-right: 20px;
					}

					&:nth-child(1) {
						background-image: url('@/assets/images/hot_picks_img1.png');
					}
					&:nth-child(2) {
						background-image: url('@/assets/images/hot_picks_img2.png');
					}
					&:nth-child(3) {
						background-image: url('@/assets/images/hot_picks_img3.png');
					}
					&:nth-child(4) {
						background-image: url('@/assets/images/hot_picks_img4.png');
					}
					&:nth-child(5) {
						background-image: url('@/assets/images/hot_picks_img5.png');
					}
					&:nth-child(6) {
						background-image: url('@/assets/images/hot_picks_img6.png');
					}

					.hot_picks_text {
						position: absolute;
						left: 10px;
						bottom: -55px;
						color: #0b0a12;

						strong {
							font-size: 20px;
						}

						small {
							margin-left: 5px;
							font-size: 13px;
						}

						p {
							letter-spacing: 1.15px;
						}
					}

					@media (max-width: 1200px) {
						width: 280px;
						height: 360px;
					}
				}
			}

			.slide_control_container {
				width: 100%;
				text-align: center;
				display: flex;
				justify-content: space-between;
				align-items: center;
				position: absolute;
				top: 34%;
				left: 50%;
				transform: translate(-50%, -50%);

				.prev, .next {
					font-size: 25px;
					padding: 2px 12px;
					background-color: #ccc;
					border-radius: 50%;
					cursor: pointer;

					&.active {
						color: #9f9f9f;
					}
				}

				@media (max-width: 1200px) {
					display: none;
				}
			}
		}
	}

	#banner {
		width: 100%;

		.banner_container {
			width: 100%;
			height: 300px;
			background-color: rebeccapurple;
			overflow: hidden;
			position: relative;

			.banner_slider {
				width: 100%;
				height: 300px;
				position: absolute;
				transition: .4s;
				.slides {
					width: 1200px;
					height: 100%;

					float: left;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-position: center;

					&:nth-child(1) {
						background-image: url('@/assets/images/banner1.png');
					}
					&:nth-child(2) {
						background-image: url('@/assets/images/banner2.png');
					}
					&:nth-child(3) {
						background-image: url('@/assets/images/banner3.png');
					}
				}
			}

			.slide_control_container {
				position: absolute;
				width: 100%;
				display: flex;
				justify-content: space-between;
				top: 48%;

				.banner_prev, .banner_next {
					font-size: 25px;
					padding: 2px 12px;
					background-color: #ccc;
					border-radius: 50%;
					cursor: pointer;
				}
			}
		}
	}
}</style>