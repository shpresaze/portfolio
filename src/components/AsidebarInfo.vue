<template>
  <div>
    <div>
      <button
        @click="toggleDetails"
        class="w-100 dark-green-back text-white my-3 badge rounded-pill fs-5"
      >
        {{ detailsActive ? "Hide" : "Show" }} DETAILS
      </button>
      <div v-if="detailsActive">
        <h2>Details</h2>
        <details-info
          iconClass="fa-phone-square"
          title="phone"
          description="+389 72 687 746"
        />
        <details-info
          iconClass="fa-envelope"
          title="E-mail"
          description="shpresaze1@gmail.com"
          class="text-break"
        />
        <details-info
          iconClass="fa-home"
          title="address"
          description="GRCHEC, UL. 5 BR. 37 SKOPJE, 1000, MACEDONIA"
        />
      </div>
    </div>
    <br />

    <div>
      <button
        @click="toggleLanguages"
        class="w-100 text-white dark-green-back my-3 badge rounded-pill fs-5"
      >
        {{ languagesActive ? "Hide" : "Show" }} LANGUAGES
      </button>
      <div v-if="languagesActive">
        <h2>Languages</h2>
        <language-progress title="Albanian(native)" progress="100" />
        <language-progress title="Macedonian" progress="70" />
        <language-progress title="Italian" progress="95" />
        <language-progress title="Turkish" progress="80" />
        <language-progress title="English" progress="70" />
      </div>
    </div>
    <br />

    <div>
      <button
        @click="toggleSkills"
        class="w-100 text-white dark-green-back my-3 badge rounded-pill fs-5"
      >
        {{ skillsActive ? "Hide" : "Show" }} SKILLS
      </button>
      <div v-if="skillsActive">
        <h2>Skills:</h2>
        <div v-for="skill in skills" v-bind:key="skill" class="row">
          <span class="col-6">
            {{ skill.nameSkill }}
          </span>
          <div class="col-6">
            <span v-for="circle in skill.knowledge" :key="circle">
              <i class="fa fa-circle green-text" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="toggleHobies"
      class="w-100 text-white dark-green-back my-5 badge rounded-pill fs-5"
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
    <br />

    <div>
      <div
        class="
          d-flex
          justify-content-evenly
          dark-green-back
          badge
          rounded-pill
          w-100
          py-3
          m-0
          row
        "
      >
        <a href="https://www.facebook.com/shpresa.zendeli " class="col-3"
          ><i
            class="fa fa-facebook-square fa-3x text-white"
            aria-hidden="true"
          ></i
        ></a>
        <a href="https://www.instagram.com/shpresa.ze/" class="col-3">
          <i class="fa fa-instagram fa-3x text-white" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/shpresaze" class="col-3"
          ><i
            class="fa fa-github-square fa-3x text-white"
            aria-hidden="true"
          ></i
        ></a>
        <a
          href="https://www.linkedin.com/in/shpresa-zendeli-414a37244/"
          class="col-3"
          ><i
            class="fa fa-linkedin-square fa-3x text-white"
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
        {
          nameSkill: "Multilanguage speaker",
          knowledge: 5,
        },
        {
          nameSkill: "Microsoft office skills",
          knowledge: 5,
        },
        {
          nameSkill: "HTML",
          knowledge: 5,
        },
        {
          nameSkill: "CSS",
          knowledge: 4,
        },
        {
          nameSkill: "Javascript",
          knowledge: 4,
        },
        {
          nameSkill: "Bootstrap 5",
          knowledge: 4,
        },
        {
          nameSkill: "C, C++, C#",
          knowledge: 3,
        },
        {
          nameSkill: "Java",
          knowledge: 3,
        },
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