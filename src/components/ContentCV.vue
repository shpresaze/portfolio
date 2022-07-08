<template>
  <div class="container p-0">
    <div class="row justify-content-between me-0">
      <div class="col-sm-12 col-md-7 col-lg-7 p-5">
        <div>
          <section-title iconClass="fa-user d-inline" title="Profile" />
          <section-details
            description="I'm a girl who wants to bring out the best version of herself, and
            works for it."
          />
        </div>
        <div>
          <section-title iconClass="fa-suitcase" title="Employment History" />
          <section-details
            v-for="obj in employmentHistory"
            :key="obj.title"
            :title="obj.title"
            :subtitle="obj.subtitle"
            :dates="obj.dates"
            :description="obj.description"
          />
        </div>
        <div>
          <section-title iconClass="fa-university" title="Education" />
          <section-details
            v-for="obj in educationHistory"
            :key="obj.title"
            :title="obj.title"
            :subtitle="obj.subtitle"
            :dates="obj.dates"
            :description="obj.description"
          />
        </div>
      </div>

      <div class="col-sm-12 col-md-4 col-lg-4 p-4 ms-sm-0 border border-2">
        <AsidebarInfo />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import DetailsInfo from "./DetailsInfo.vue";
import SectionTitle from "./SectionTitle.vue";

import SectionDetails from "./SectionDetails.vue";
import LanguageProgress from "./LanguageProgress.vue";
import AsidebarInfo from "./AsidebarInfo.vue";

export default {
  components: {
    DetailsInfo,
    SectionTitle,
    AsidebarInfo,
    SectionDetails,
    LanguageProgress,
  },
  data() {
    return {
      employmentHistory: [
        {
          title: "Ipsos, Skopje",
          subtitle: "Call center Operator",
          dates: "June 2019 - August 2019",
          description:
            "I worked on a call center company for surveys, where I was a telephone operator and asked people questions from the survey requested by a certain company.",
        },
        {
          title: "Zara, Grosseto-Italy",
          subtitle: "Sales Assistant",
          dates: "August 2019 - September 2019",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
        },
      ],
      educationHistory: [
        {
          title: "Ss. Cyril and Methodius University in Skopje",
          subtitle: "Student, Faculty of Computer Science and Engineering",
          dates: "September 2019 - Ongoing",
          description:
            "During this period I was learning how to do things right. Most of the time I was doing School Projects and listening to subjects that gonna teach me skills I didn't know before.",
        },
        {
          title: "Zef Lush Marku - High school in Skopje",
          subtitle: "Graduated, Mathematics",
          dates: "September 2015 - June 2019",
          description:
            "During this period I was learning how to do things right. Most of the time I was doing School Projects and listening to subjects that gonna teach me skills I didn't know before.",
        },
        {
          title: "Dituria - Elementary school in Grchec",
          subtitle: "Graduated",
          dates: "September 2010 - June 2015",
          description: "",
        },
        {
          title: "L'Istituto Comprensivo “G.Civinini”",
          subtitle: "Elementary school in Italy-Albinia",
          dates: "September 2005 - June 2010",
          description: "",
        },
      ],
    };
  },
};
</script>
