import { forwardRef, useRef } from "react";
import styled from "styled-components";
import { useInView } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkIcon, EducationIcon } from "../assets/icons/_index";
import { experiences } from "../utils/constants";

const WhoAmI = (props, ref) => {
  const isInViewRef = useRef(null);
  const isInView = useInView(isInViewRef, { amount: 0.4 });

  return (
    <Section ref={ref}>
      <div ref={isInViewRef}>
        <VerticalTimeline>
          {experiences.map((item) => {
            const icon =
              item.icon === "work" ? <WorkIcon /> : <EducationIcon />;
            return (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--education"
                date={item.date}
                iconStyle={item.iconStyle}
                icon={icon}
                intersectionObserverProps={{ isInView }}
              >
                <H3>{item.title}</H3>
                <H4>{item.subtitle}</H4>
                <P>{item.desc}</P>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default forwardRef(WhoAmI);

const Section = styled.div`
  /* scroll-snap-align: center; */
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const H4 = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
  color: #000;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 300;
  color: #000;
`;
