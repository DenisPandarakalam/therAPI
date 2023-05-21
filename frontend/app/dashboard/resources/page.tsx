'use client';


const SECTIONS = [
    {
        label: "Crisis Text Line",
        description: "Text RELATE to 741741 from anywhere in the US"
    },
    {
        label: "Davis Suicide Prevention and Crisis Line",
        description: "Call 530-756-5000",
    },
    {
        label: "Student Health and Counseling Services",
        description: [
            "Medical and Mental Health: Call 530-752-2300 (After hours Counseling Services consultation call 530-752-2349).", 
            "Mental Health Acute Care Services are available at the Student Health and Wellness Center (SHCS) by appointment.",
            "Online video counseling through Student Health and Counseling Services.",
            "CAN Counselors provide students with consultation and personal counseling in addition to programs, workshops and other campus community outreach activities.",
            "Therapy Assistance Online (TAO) Free online therapy for UC Davis students.",
            "Aggie Mental Health - Aggie Mental Health (formerly known as Each Aggie Matters) is the campus website for all mental wellness resources. Visit this site to access resources for mental wellness, join a supportive campus community and participate in an open and affirming dialogue about mental health. Check out the Mental Health Map on their homepage."
        ]
    }
]

export default function Resources() {

  return (
    <>
      <div className="flex w-full flex-col text-left">
        <div className="h-screen w-full bg-background rounded-tl-[50px] rounded-tr-[50px] pl-16 pt-16">
            {
                SECTIONS.map((section) => {

                    return(
                        <div className="text-white">
                            <h1 className="text-[48pt] font-bold ">
                                {section.label}
                            </h1>
                            {
                                Array.isArray(section.description) &&
                                section.description.map((descriptionLine) => (
                                    <div className="text-md font-light italic">
                                        {descriptionLine}
                                    </div>
                                ))
                            }
                            {
                                !Array.isArray(section.description) &&
                                <div className="text-md font-light italic">
                                    {section.description}
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}
