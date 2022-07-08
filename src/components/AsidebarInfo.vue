<template>
  <div>
    <div>
      <button
        @click="toggleDetails"
        class="w-100 darkGreenBack text-white my-3 badge rounded-pill fs-5"
      >
        {{ detailsActive ? "Hide" : "Show" }} DETAILS
      </button>
      <div v-if="detailsActive">
        <h2>Details</h2>
        <DetailsInfo
          iconClass="fa-home"
          title="address"
          description="GRCHEC, UL. 5 BR. 37 SKOPJE, 1000, MACEDONIA"
        />
        <DetailsInfo
          iconClass="fa-phone-square"
          title="phone"
          description="+389 72 687 746"
        />
        <DetailsInfo
          iconClass="fa-envelope"
          title="E-mail"
          description="shpresaze1@gmail.com"
          class="text-break"
        />
      </div>
    </div>
    <br />
    <div>
      <button
        @click="toggleLanguages"
        class="w-100 text-white darkGreenBack my-3 badge rounded-pill fs-5"
      >
        {{ languagesActive ? "Hide" : "Show" }} LANGUAGES
      </button>
      <div v-if="languagesActive">
        <h2>Languages</h2>
        <LanguageProgress title="Albanian(native)" progress="100" />
        <LanguageProgress title="Macedonian" progress="70" />
        <LanguageProgress title="Italian" progress="95" />
        <LanguageProgress title="Turkish" progress="80" />
        <LanguageProgress title="English" progress="70" />
      </div>
    </div>
    <br />

    <div>
      <button
        @click="toggleSkills"
        class="w-100 text-white darkGreenBack my-3 badge rounded-pill fs-5"
      >
        {{ skillsActive ? "Hide" : "Show" }} SKILLS
      </button>
      <div v-if="skillsActive">
        <h2>Skills:</h2>
        <p v-for="skill in skills" v-bind:key="skill">{{ skill }}</p>
      </div>
    </div>
    <button
      @click="toggleHobies"
      class="w-100 text-white darkGreenBack my-3 badge rounded-pill fs-5"
    >
      {{ hobiesActive ? "Hide" : "Show" }} HOBBIES
    </button>
    <div v-if="hobiesActive">
      <h3>Hobbies:</h3>
      <div class="d-flex justify-content-evenly">
        <i
          v-for="icon in iconsHobbie"
          class="fa fa-2x green-text"
          :class="icon"
          aria-hidden="true"
          :key="icon"
        ></i>
      </div>
    </div>

    <br class="mt-0 pt-0" />
    <div>
      <div
        class="
          d-flex
          justify-content-evenly
          darkGreenBack
          badge
          rounded-pill
          w-100
          py-3
        "
      >
        <a href="https://www.facebook.com/shpresa.zendeli"
          ><i
            class="fa fa-facebook-square fa-3x text-white me-5"
            aria-hidden="true"
          ></i
        ></a>
        <a href="https://www.instagram.com/shpresa.ze/">
          <i
            class="fa fa-instagram fa-3x text-white me-5"
            aria-hidden="true"
          ></i>
        </a>
        <a href="https://github.com/shpresaze"
          ><i
            class="fa fa-github-square fa-3x text-white"
            aria-hidden="true"
          ></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import DetailsInfo from "./DetailsInfo.vue";
import LanguageProgress from "./LanguageProgress.vue";
export default {
  components: {
    LanguageProgress,
    DetailsInfo,
    SectionTitle,
    DetailsInfo,
  },
  data() {
    return {
      detailsActive: true,
      languagesActive: true,
      skillsActive: true,
      hobiesActive: true,
      skills: [
        "Multilanguage speaker",
        "Microsoft office skills",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap 5",
        "C, C++",
        "C#",
      ],
      iconsHobbie: ["fa-plane", "fa-video-camera", "fa-music", "fa-bicycle"],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsActive = !this.detailsActive;
    },
    toggleLanguages() {
      this.languagesActive = !this.languagesActive;
    },
    toggleSkills() {
      this.skillsActive = !this.skillsActive;
    },
    toggleHobies() {
      this.hobiesActive = !this.hobiesActive;
    },
  },
};
</script>

<style>
</style>