<template>
  <div class="container contentCV p-0">
    <div class="row justify-content-between me-0">
      <div class="col-sm-12 col-md-7 col-lg-7 p-5">
        <div>
          <SectionTitle iconClass="fa-user" title="Profile" />
          <SectionDetails
            description="I'm a girl who wants to bring out the best version of herself, and
            works for it."
          />
        </div>
        <div>
          <SectionTitle iconClass="fa-suitcase" title="Employment History" />
          <SectionDetails
            title="Ipsos, Skopje"
            subtitle="Call center Operator"
            dates="June 2019 - August 2019"
            description="I worked on a call center company for surveys, where I was a
            telephone operator and asked people questions from the survey
            requested by a certain company."
          />
        </div>
        <div>
          <SectionTitle iconClass="fa-university" title="Education" />
          <SectionDetails
            title="Ss. Cyril and Methodius University in Skopje"
            subtitle="Student, Faculty of Computer Science and Engineering"
            dates="September 2019 - Ongoing"
            description="During this period I was learning how to do things right. Most of
            the time I was doing School Projects and listening to subjects that
            gonna teach me skills I didn't know before."
          />
          <SectionDetails
            title="Zef Lush Marku - High school"
            subtitle="Graduated, Mathematics"
            dates="September 2015 - June 2019"
            description="During this period I was learning how to do things right. Most of
            the time I was doing School Projects and listening to subjects that
            gonna teach me skills I didn't know before."
          />
        </div>
      </div>
      <div
        class="
          col-sm-12 col-md-4 col-lg-4
          p-4
          ms-sm-0
          border border-success border-2
        "
      >
        <div>
          <button @click="toggleDetails" class="w-100 bg-success text-white">
            {{ detailsActive ? "Hide" : "Show" }} DETAILS
          </button>
          <div v-if="detailsActive">
            <h5>Details</h5>
            <DetailsInfo
              title="address"
              description="GRCHEC, UL. 5 BR. 37 SKOPJE, 1000, MACEDONIA"
            />
            <DetailsInfo title="phone" description="+389 72 687 746" />
            <DetailsInfo
              title="E-mail"
              description="shpresaze1@gmail.com"
              class="text-break"
            />
          </div>
        </div>
        <br />
        <div>
          <button @click="toggleLanguages" class="w-100 bg-success text-white">
            {{ languagesActive ? "Hide" : "Show" }} LANGUAGES
          </button>
          <div v-if="languagesActive">
            <h5>Languages</h5>
            <LanguageProgress title="Albanian(native)" progress="100" />
            <LanguageProgress title="Italian" progress="95" />
            <LanguageProgress title="Macedonian" progress="70" />
            <LanguageProgress title="English" progress="70" />
            <LanguageProgress title="Turkish" progress="80" />
          </div>
        </div>
        <br />
        <div>
          <button @click="toggleSkills" class="w-100 bg-success text-white">
            {{ skillsActive ? "Hide" : "Show" }} SKILLS
          </button>
          <div v-if="skillsActive">
            <h5>Skills:</h5>
            <p v-for="skill in skills" v-bind:key="skill">{{ skill }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import SectionDetails from "./SectionDetails.vue";
import SectionTitle from "./SectionTitle.vue";
import DetailsInfo from "./DetailsInfo.vue";
import LanguageProgress from "./LanguageProgress.vue";

export default {
  components: {
    LanguageProgress,
    DetailsInfo,
    SectionTitle,
    DetailsInfo,
    SectionDetails,
  },
  data() {
    return {
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
      detailsActive: false,
      languagesActive: false,
      skillsActive: false,
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
  },
};
</script>
