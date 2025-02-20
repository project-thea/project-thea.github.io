import React from 'react';
import logoImg from '../images/logo_text_colored.svg';
import logoWhiteImg from '../images/logo_text_white.svg';
//import networkImg from '../images/network_structure.png';
import phoneTrackingImg from '../images/phone_tracking.png';
import bodastageLogo from '../images/logo-bodastage.svg';
import RoslinLogo from '../images/roslin.png';
import mukLogo from '../images/muk.jpg';
import mohLogo from '../images/moh.png';
import psfuLogo from '../images/psfu_logo.png';
import THEALogo from '../images/THEA_LOGO.png';
import EdinInfoLogo from '../images/edinburgh_informatics.png';
import NIHRLogo from '../images/nihr_logo.png';
import UKRILogo from '../images/ukri_logo.png';
import mowtLogo from '../images/mowt_logo.png';
import { AndroidOutlined, LinkOutlined } from '@ant-design/icons';
import pillarsImg from '../images/pillars.png';
import imgTeam1 from '../images/first_consultative_delegates.jpg';
import imgPoE1 from '../images/poe_visit_1.png';

export const Banner50DataSource = {
  wrapper: { className: 'home-page-wrapper banner5' },
  page: { className: 'home-page banner5-page' },
  childWrapper: {
    className: 'banner5-title-wrapper',
    children: [
      {
        name: 'explain',
        className: 'banner5-explain',
        children: (
          <span>
            <span>
              <span>
                <p>Tracking haulage in East Africa to control COVID-19</p>
              </span>
            </span>
          </span>
        ),
      },
 
		{
        name: 'button',
        className: 'banner5-button-wrapper',
        children: {
          //href: 'https://github.com/project-thea/mobile-app/releases',
		  href: 'https://github.com/project-thea/mobile-app/releases/download/v0.0.2/thea-c19-v0.0.2.apk',
          className: 'banner5-button',
          type: 'primary',
          children: (
            <span>
              <p><AndroidOutlined /> Get mobile app</p>
            </span>
          ),
        },
      },
	  {
        name: 'button',
        className: 'banner5-button-wrapper2',
        children: {
		  href: 'https://demo.project-thea.org',
          className: 'banner5-button',
          //type: 'default',
          children: (
            <span>
              <p><LinkOutlined /> Try server demo</p>
            </span>
          ),
        },
      },
    ],
  },
  image: {
    className: 'banner5-image',
    children:
	  THEALogo
  },
};
export const Feature10DataSource = {
  wrapper: { className: 'home-page-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
	children: phoneTrackingImg
  },
  textWrapper: { className: 'content1-text', md: 28, xs: 24 },
  //textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <span>
        <p>THEA-C19 Project Pillars</p>
      </span>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
	<div>
          <p>
THEA-C19 is an 18 months research project funded by Medical Research council and National
Institutes of Health Research, the first of its kind on the African continent. The project is co-led
by principle investigators from Makerere and Edinburgh University, partnering with the
Ministry of Health(MOH) and Bodastage solutions in Uganda. The activities are supported by
the Ministry of Works and Transport and the National logistics platform.
<br /><br />
          </p>
			  
			<p>
				<img src={pillarsImg} width="80%" alt="img" />
				<br /><br />
			</p>
<p>
The figure shows the four pillars of the project and where the stakeholder fit into the project
pillars. The project is designed to generate stakeholder input for the technology
development(“technology contextualisation”) through consultative meetings. The technology
development pillar is led by Bodastage solutions with input from the Blockchain technology
laboratory in Edinburgh and Makerere University. The tool will then be tested on the primary
stakeholder i.e. haulage truck drivers, the data generated will be analysed to provide critical
feedback to the relevant stakeholders.
          </p>
		</div>
    ),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Features</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>The platform has the following features</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Pandemic modelling</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>Modelling of multiple disease spread patterns</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Health Certificate Issuing</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>
                        Issuing of certificate of good health to track drivers
                      </p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Web and mobile</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>Access from multiple interfaces i.e. web, mobile, and tab</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Data Privacy</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>Use of biometric&nbsp;</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Thirdy party integration</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Integration with third party systems to enrich the data and
                    analysis
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Predictive Analysis</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>
                  Use of machine learning and big data to provide actionable
                  reports&nbsp;
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Articles20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Blog</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    gutter: 72,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Consultating stakeholders</p>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>August 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
The THEA team organized a stakeholder’s workshop that brought together experts from different fields to share knowledge and experiences regarding the implementation, the ethical and legal implications of using a mobile surveillance tool. This was followed by several consultative meetings with key players in the haulage sector and officials in the Ministry of Health (Uganda). This way, we develop technology that can respond to the needs of the community (truck drivers) and support public health contact tracing. From these interactions, we have been able to get more ideas that necessitated modifications to the tool to appeal to the different stakeholders.
				  </p>
				  <br />
				  <p>
				  <img src={imgTeam1} width="100%"/> <br />
				  <span style={{fontStyle: 'italic'}}>
				  First consultative meeting held at Imperial Royal hotel on 17th August 2021. We had a wide range of expertise from the legal, ethics, socio-anthropology, public health, information technology, haulage sector and academia
				  </span>
				  </p>
				  <br />
				  <p>
These meetings highlighted some challenges, which meant that the THEA-C19 team had to engage further with the primary stakeholders via the National Logistics Platform. We appreciate that this will be an ongoing consultative process. However, this has taken a little more time than anticipated, getting all on board to appreciate this great innovation. Consequently, we are still in the consultation here but have broadened this remit to accommodate the diversity of views and mandates.
					</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Inspecting Ports of entry and exit</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <p><strong>August 2021</strong></p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
In order to understand the complexity of the process involved in crossing Uganda’s frontiers, we visited POEs, including Malaba and Elegu. We held meetings with the Ministry of Health Port health, District officials and the private laboratories mandated to carry out COVID-19 diagnostics in Uganda. This visit allowed us to map the process that THEA-C19 would augment.
					  </p>
					  
					  <p>
					  <img src={imgPoE1} /> <br />
					  <span style={{fontStyle: 'italic'}}>
					  THEA-C19 team visiting POEs, these include Mutukula, Mpondwe, Elegu and Malaba. The photos were taken at Mutukula and Mpondwe
					  </span>



					  </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Awareness and sensitization campaign </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>September-November 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
		In order to engage the truck drivers effectively, there was a need to create awareness about what-were are doing, why -we are doing this, and how the drivers and their sector benefits link https://project-thea.org/resources.html 
This was done by talking to truck drivers at their workstations, understanding their fears and concerns but importantly, what utility they wanted from the digital tool. We have carried out such campaigns at Nalukolongo parking yard and at Mukwano industries ltd http://www.mukwano.com

				  
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Supporting the COVID-19 vaccination campaign</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong>November and December 2021</strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Vaccination is a critical tool for the control of COVID-19, our engagement with truck drivers revealed that they were not keen on lining up with the general public as this took a lot of time which they did not have given their routine. This is why few of them had been vaccinated; we then requested the Ministry of Health to conduct a mobile vaccination drive to bring this service directly to the truck drivers. This would allow us to contribute to rapid control of this disease and recruit drivers for the trial. We are glad to report that these efforts have allowed the vaccination of 1800 drivers and their close relations to date. We anticipate extending this to various POEs would help vaccinate up to 10,000.
				  </p> <br />
				  <p>
				  <span style={{fontStyle: 'italic'}}>
				  Vaccination campaign supported by THEA-C19 project which has registered 1800 vaccination, 70% being the first jab. These activities were made possible by the ministry of health via the Kampala city authority health unit. The photos show enthusiastic drivers and their close families being vaccinated.
				  </span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Training staff at POEs and Laboratories</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p><strong>December 2021</strong></p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
Together with the technical team at MoH, the THEA team visited Malaba and Elegu POEs to train the port staff and laboratory personnel. The personnel were trained to help drivers install the mobile application. They were trained on how to respond to drivers' questions and ensure informed consent to participate. We also provide a troubleshooting guideline with solutions for issues that could arise during the installation and enrolment onto the system. Such issues included no smartphone, an older android version, a driver having a cracked screen, antagonistic phone settings. We also conducted a practical session where the trained personnel would try to recruit a driver onto the system to demonstrate the data flow. These visits allowed the team to appreciate the differences in process at each POE, for example, internet connectivity issues at Mpondwe, low traffic at Mutukula and unregistered drivers on RECDTS at Elegu.
				  </p>
				  <br />
				  <p>
				  <span style={{fontStyle: 'italic'}}>
The THEA-C19 and MOH technical team training laboratory personnel on how to use the application at Mpondwe border.
</span>
				  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 24,
        xs: 24,
        image: {
          name: 'image',
          className: 'teams2-image',
          children: null,
        },
        titleWrapper: {
          className: 'teams2-textWrapper',
          children: [
            {
              name: 'title',
              className: 'teams2-title',
              children: (
                <span>
                  <p>Way forward to 2022</p>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams2-job',
              children: (
                <span>
                  <p><strong></strong></p>
                </span>
              ),
            },
            {
              name: 'content1',
              className: '',
              children: (
                <span>
                  <p>
As part of our trial of the digital tool, we have started onboarding truck drivers onto the tool and have more than 100 on the system so far. This trial allows checking that all the systems are ready to go. We expect to start a full driver recruitment drive in January 2022, and this will be done for eight months with a target of 30,000 drivers on the system
				  </p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Partners</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
		href: 'https://www.ed.ac.uk/roslin',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: RoslinLogo,
			width: 200
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
	    href: 'https://www.bodastage.com/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: bodastageLogo,
			width: 120
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
		href: 'https://www.mak.ac.ug/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: mukLogo,
			width: 160
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
		href: 'https://www.ed.ac.uk/informatics/blockchain',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: EdinInfoLogo,
			width: 250
          },
        },
      },
      //{
      //  name: 'block5',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children:
      //        'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
      //    },
      //  },
      //},
    ],
  },
};

export const Content121DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Funders</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 12,
        xs: 24,
		href: 'https://www.nihr.ac.uk/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: NIHRLogo,
			width: 200
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 12,
        xs: 24,
	    href: 'https://mrc.ukri.org/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: UKRILogo,
			width: 200
          },
        },
      },
      //{
      //  name: 'block3',
      //  className: 'block',
      //  md: 6,
      //  xs: 24,
		//href: 'https://www.mak.ac.ug/',
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children: mukLogo,
		//	width: 160
      //    },
      //  },
      //},
      //{
      //  name: 'block4',
      //  className: 'block',
      //  md: 6,
      //  xs: 24,
		//href: 'https://www.ed.ac.uk/informatics/blockchain',
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children: EdinInfoLogo,
		//	width: 250
      //    },
      //  },
      //},
      //{
      //  name: 'block5',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children:
      //        'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
      //    },
      //  },
      //},
    ],
  },
};

export const Content122DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>With support from</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
		href: 'https://www.health.go.ug/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: mohLogo,
			width: 150
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
	    href: 'https://www.psfuganda.org/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: psfuLogo,
			width: 200
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
		href: 'https://www.works.go.ug/',
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children: mowtLogo,
			width: 160
          },
        },
      },
      //{
      //  name: 'block4',
      //  className: 'block',
      //  md: 6,
      //  xs: 24,
		//href: 'https://www.ed.ac.uk/informatics/blockchain',
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children: EdinInfoLogo,
		//	width: 250
      //    },
      //  },
      //},
      //{
      //  name: 'block5',
      //  className: 'block',
      //  md: 8,
      //  xs: 24,
      //  children: {
      //    wrapper: { className: 'block-content' },
      //    img: {
      //      children:
      //        'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
      //    },
      //  },
      //},
    ],
  },
};

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          //children:
		  //'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
		  children: 'Project-THEA'
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>Tracking haulage in East Africa to control COVID-19</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Resources' },
        childWrapper: {
          children: [
            //{
            //  name: 'link0',
            //  href: '#',
            //  children: (
            //    <span>
            //      <span>
            //        <p>Publications</p>
            //      </span>
            //    </span>
            //  ),
            //},
            { name: 'link1', href: 'https://github.com/project-thea/', children: 'Github' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Contact' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'support@project-thea.org' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>Social Media</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: 'https://twitter.com/thea_c19',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <span>
                      <p>Twitter</p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>© 2022 Project-THEA.&nbsp;All Rights Reserved</span>
      </span>
    ),
  },
};
