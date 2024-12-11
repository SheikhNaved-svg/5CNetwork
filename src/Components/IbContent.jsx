import { useParams } from "react-router-dom";
import data from "../data/data";

export default function IbContent(){
    const { id } = useParams();
    const blogdata = data.find((item) => item.id === parseInt(id));
    return(
        <div className="px-5 lg:px-20 2xl:px-40 custom-lg:px-60 py-10">
        <p className="flex items-center gap-3 font-medium text-[16px] leading-[24px]">
          <span className="text-[#2D5980]">{blogdata.author}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="3"
              viewBox="0 0 4 3"
              fill="none"
            >
              <path
                d="M1.824 2.336C1.464 2.336 1.168 2.232 0.936 2.024C0.712 1.808 0.6 1.544 0.6 1.232C0.6 0.912 0.712 0.644 0.936 0.428C1.168 0.212 1.464 0.104 1.824 0.104C2.176 0.104 2.464 0.212 2.688 0.428C2.92 0.644 3.036 0.912 3.036 1.232C3.036 1.544 2.92 1.808 2.688 2.024C2.464 2.232 2.176 2.336 1.824 2.336Z"
                fill="#6E6E6E"
              />
            </svg>
          </span>{" "}
          <span className="text-[#6E6E6E]">{blogdata.date}</span>
        </p>
        <h1 className="text-[36px] text-[#2C2C2C] font-semibold leading-[44px] pt-2">
          {blogdata.title}
        </h1>

        <div className="flex flex-col gap-5 pt-8">
        <div className="leading-[24px] flex flex-col gap-7">
          <p>Today, we announced our USD 4.6Mn Series A funding led by Celesta
          Capital, supported by Tata 1mg, Unitus Ventures, and Axilor Ventures,
          along with participation from some incredible angels. We were clear
          that we would only work with investors who really understood the
          business and the non-linear paths to scale. Sudhir and the team at
          Celesta not only understood our business but proactively added to the
          vision and direction, and this made them our first choice in this
          crucial time. We are really excited about what this means for our
          vision of making diagnosis more accessible and accurate, and we invite
          you to check out the details of the raise <a className="underline" href='https://economictimes.indiatimes.com/tech/funding/digital-diagnostic-startup-5c-network-raises-4-6-million/articleshow/94819661.cms'>here</a> and <a className="underline" href='https://www.livemint.com/companies/start-ups/diagnostics-platform-5c-network-raises-4-6-mn-in-series-a-funding-round-11665567455087.html'>here</a>.</p>
          <p> Rather than
          simply announcing the funding in another press release, I want to shed
          more light on the current state of diagnosis for both patients and
          doctors; how we envision the future, and most importantly, how we
          intend to shape it.</p> Syed and I always maintain that we are accidental
          venture-funded entrepreneurs - TAM, SAM, and SOM were just rhyming
          words, nothing else. Our journey in 5C started after we personally
          experienced a problem with a late diagnostic report in Bangalore. The
          thought that hit us immediately was that if there were no Radiologists
          in the heart of Bangalore city, we could expect a far more acute
          shortage in Tier-2 cities. For the most part, Radiologists are
          concentrated where most of the demand (and affordability) is, which is
          in Metro cities. We saw first-hand how hospitals in non-metro cities
          were willing to work on a critical part of their clinical workflow
          with two first-time, earnest but inexperienced healthcare
          entrepreneurs.
        </div>

        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          An "India" problem, not just a "Bharat" problem
        </h3>

        <div className="leading-[24px] flex flex-col gap-7">
            <p> In startup parlance, Bharat is Tier-2 India and beyond - and 5C was
          building for Bharat in our early days. Our clients were hospitals and
          diagnostic centers that did not have access to a Radiologist at all or
          had one coming in once every few days at best. We solved for access.
          In the backend, we built out a network of Radiologists from across the
          country who would give us chunks of their time in a day to interpret
          these scans coming in from across India.</p><p> We soon realized that
          hospitals and diagnostic centers in Metro and Tier-1 cities also
          required us; not just for access, but for clear financial,
          operational, and clinical reasons. Deep clinical expertise, which is
          affordable and available on-demand became our calling card. We have
          had the pleasure of working with some of India's largest hospitals,
          hospital chains, and diagnostic centers. Some of them have incredibly
          high clinical standards that we needed to live up to, and this
          challenged us to get better. We saw how Teleradiology was almost a bad
          word in some of the centers we went to work with. They were scarred by
          fly-by-night operators looking to make a quick buck,
          international-focused players, or even large hospitals using them as
          training fodder and delivering sub-standard reports without realizing
          the impact on the patient. We knew that we had to focus on clinical
          excellence to be able to change the trajectory and the perception of
          the industry.</p>
        </div>

        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          The future of work for diagnostics
        </h3>

        <div className="leading-[24px] flex flex-col gap-7">
          <p>In hindsight, it's obvious to us that our demand was able to scale
          only because our supply of radiologists working with us was steadily
          improving.</p><p> We noticed (with great pride) that radiologists across the
          board, including leading senior radiologists to young and ambitious
          freshers, chose to give up their physical practice space and become
          virtual consultants. Some reasons were obvious - these radiologists
          didn't need to navigate massive traffic snarls, they didn't have to
          physically meet people in these pandemic times, and because of not
          having to wait for patients, they could actually earn more money.</p><p> But
          there were a couple of other extremely relevant points. Firstly, the
          radiologists said that with the technology and quality guardrails that
          5C provided, they were their best selves on our platform.</p><p> Secondly,
          the radiologists felt the impact of the work they were doing - many of
          them said that the motivation for them to work with us was the fact
          that their expertise was now available to people across the country.</p>
          <p>When expertise is empowered digitally to be better than ever before,
          physical presence is actually a disadvantage. We believe remote and
          digitally-enabled is the future of work for diagnostic experts in
          India and abroad as well.</p><p> You can expect us to invest heavily in
          technologies that will improve clinical context, clinical decision
          making and clinical communication amongst various stakeholders, and
          cement remote, AI-augmented radiologists as the default standard for
          better diagnosis everywhere, be it in a small diagnostic center in
          Buxar or in a large tertiary hospital in Bangalore.</p>
        </div>

        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          Raising the Bar
        </h3>

        <div className="leading-[24px] flex flex-col gap-7 ">
          <p>The Sanskrit word Agnipariksha, which means ordeal by fire, signifies
          so much more. The fire transforms and cleanses. Our experience of
          working with some of the leading hospitals and their clinical staff
          can be described as our Agnipariksha - it made us an incredibly sharp
          and well-oiled clinical delivery machine. Our desire to make our
          diagnostic reports AAA (Accurate, Articulate, and Actionable) made us
          build technology that has never been seen in the field before. This
          had an interesting consequence, and it was our biggest learning - we
          were raising the bar for our clients and for our industry. Our clients
          in Damoh were getting the same incredible quality and speed of
          diagnosis that our demanding clients in Delhi were getting. What we
          had really built was India's first quality-assured diagnostic network.
          If you went to any center that had partnered with 5C, wherever you
          are, you would be assured of an on-time, accurate, and actionable
          diagnostic report. Quality is not about going to the biggest name
          anymore. Everybody everywhere deserves an assurance of quality.</p><p>
          Especially today, when hospitals are under pressure to deliver great
          clinical outcomes while also being under tremendous margin pressure,
          we found that we fit perfectly into their plans. We have seen so many
          of our customers being better prepared for emergencies because of our
          reports.</p>
        </div>
        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          Strengthening our Diagnostic Pathways with Vit D (Data)
        </h3>
        <div className="leading-[24px] flex flex-col gap-7">
          <p>Another massive learning for us, which seems so obvious in hindsight,
          is that diagnosis does not happen in isolation. Diagnostics are the
          floodlights of the arena that bear witness to the battle between
          health and disease.</p><p> There is something that has happened to the
          patient before a diagnostic test, and there is something that needs to
          happen to the patient for them to be cured. Diagnosis bridges this
          gap. And to do that effectively, we need to understand the context -
          the context of the patient, the context of the disease, the context of
          the images, and the context of the previous tests.</p><p>We are committing
          some of our best minds and significant resources to strengthen our
          data science capabilities. Unless we understand context through data,
          we cannot significantly improve the diagnostic experience. We have one
          of the largest and richest data repositories across the country, and
          we have used this to build intelligence to drive better outcomes.</p>
          <p>During the second wave of COVID-19, we worked closely with the state
          government to monitor CT Severity scores, and our data played a direct
          role in quarantine and lockdown policies.</p><p> Our average Turn Around Time
          for Chest X-rays is in low single-digit minutes, because of deeply
          integrated image recognition. Today, 5C is the largest AI-powered
          medical platform in the country.</p><p>We are just scratching the surface of
          what we can do when we marry data and context, and we believe that
          this is one of the largest and most impactful opportunities available
          to us today.</p>
        </div>

        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          Strengthening our Diagnostic Pathways with Vit D (Data)
        </h3>
        <div className="leading-[24px] flex flex-col gap-7">
          <p>Another massive learning for us, which seems so obvious in hindsight,
          is that diagnosis does not happen in isolation. Diagnostics are the
          floodlights of the arena that bear witness to the battle between
          health and disease.</p><p> There is something that has happened to the
          patient before a diagnostic test, and there is something that needs to
          happen to the patient for them to be cured. Diagnosis bridges this
          gap. And to do that effectively, we need to understand the context -
          the context of the patient, the context of the disease, the context of
          the images, and the context of the previous tests.</p><p>We are committing
          some of our best minds and significant resources to strengthen our
          data science capabilities. Unless we understand context through data,
          we cannot significantly improve the diagnostic experience. We have one
          of the largest and richest data repositories across the country, and
          we have used this to build intelligence to drive better outcomes.</p>
          <p>During the second wave of COVID-19, we worked closely with the state
          government to monitor CT Severity scores, and our data played a direct
          role in quarantine and lockdown policies.</p><p> Our average Turn Around Time
          for Chest X-rays is in low single-digit minutes, because of deeply
          integrated image recognition. Today, 5C is the largest AI-powered
          medical platform in the country.</p><p>We are just scratching the surface of
          what we can do when we marry data and context, and we believe that
          this is one of the largest and most impactful opportunities available
          to us today.</p>
        </div>

        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          Platforms are communities
        </h3>
        <div className="leading-[24px] flex flex-col gap-7 ">
          <p>When we think of platforms, we tend to think of tech. We have always
          taken the stand that people (users) make platforms successful. There
          are many distinct users on our platform - physicians, diagnosticians,
          and technicians - just to name a few. Platforms require each of these
          users to behave optimally in order to generate better outcomes. But
          user incentives are not always aligned. Physicians want to see more
          patients, radiographers want to complete scans faster and radiologists
          want to see more cases. How do we align their incentives to help each
          patient with the right diagnosis?</p><p>Enter the idea of communities, which
          form the bedrock of well-functioning platforms. Communities nudge
          members to act in the right way, and this helps align goals. It's
          important to add here that incentives need not be monetary alone.
          Social proof and certifications play an extremely important role.</p><p> Our
          radiologists have always been part of a community, but we are
          expanding our efforts now. We are creating the largest community
          platform for radiographers and building social proof, certifications
          and accreditations as strong incentives. The radiographer community is
          incredible - they are hardworking, proud of their work, and keen to do
          better, always. We aim to invest in these user communities, and in
          turn, improve outcomes for everyone.</p>
        </div>

        <h3 className="font-semibold text-[20px] leading-[24.8px] pt-5">
          Building a better experience for everyone
        </h3>
        <div className="leading-[24px] flex flex-col gap-7">
          <p>As you would now know, we are using our new dry powder to invest in
          our data science and AI potential, to invest in communities, and to
          expand our reach to every corner of India - to every hospital and
          diagnostic center in the country. But there is an even larger vision
          that we are chasing.</p><p> 5C is not just a clinical delivery network, we
          are an integrated network of quality-assured diagnostic centers across
          India - present in 334 cities in 27 states. Be it in India's largest
          private hospital, or a small X-Ray center in BTM Layout, Bangalore,
          our level of diagnosis delivery remains the same - always excellent.
          With all the superpowers we are building, and with the support of our
          patient aggregator partners led by Tata 1mg, we are building the
          book-and-pay engine for diagnostics. This engine is being built on top
          of the clinical delivery network that we have already built.
          Revolutionizing diagnosis in India is one of the most exciting digital
          opportunities this decade, and we are lucky to be building in this
          space.</p><p> We have big dreams, and we are not afraid of them. We do
          understand that building a large, valuable, and sustainable business
          takes time, effort, and of course, some amount of luck; but what I can
          promise you is that we will invest our time, energy thought, and
          resolve in building a better future for diagnosis.</p>
        </div>

        <div className="text-[#000000] pb-20 font-semibold text-[20px] leading-[30px] pt-5">धीरे-धीरे रे मना, धीरे सब कुछ होय <br></br>
        माली सींचे सौ घड़ा, ॠतु आए फल होय।</div>
      </div>
      </div>

    )
}