import Link from 'next/link';

import {
  Flex,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slide() {
  return (
    <Flex w="100%" maxWidth={1240} mx="auto" mb={["9", "20"]}>
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            style={{ width: '100%', flex: '1' }}
          >
            <SwiperSlide>
            <Link href="/continent">
              <a>
                <Flex
                  h={useBreakpointValue({ base: "250", md: "550" })}
                  align="center"
                  justify="center"
                  bgImage="url('/images/continents/Europa.jpg')"
                  bgPos="center"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                >
                  <Text
                  color="white.800"
                  fontSize={["2xl", "5xl"]}
                  fontWeight="700"
                  >
                    Europa
                  </Text>
                </Flex>
              </a>
            </Link>
            </SwiperSlide>
            <SwiperSlide>

              <Flex
                h={useBreakpointValue({ base: "250", md: "550" })}
                align="center"
                justify="center"
                bgImage="url('/images/continents/Africa.jpg')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
              >
                <Text
                  color="white.800"
                  fontSize={["2xl", "5xl"]}
                  fontWeight="700"
                >
                  África
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                h={useBreakpointValue({ base: "250", md: "550" })}
                align="center"
                justify="center"
                bgImage="url('/images/continents/Asia.jpg')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
              >
                <Text
                  color="white.800"
                  fontSize={["2xl", "5xl"]}
                  fontWeight="700"
                >
                  Ásia
                </Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                h={useBreakpointValue({ base: "250", md: "550" })}
                align="center"
                justify="center"
                bgImage="url('/images/continents/Oceania.jpg')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
              >
                <Text
                  color="white.800"
                  fontSize={["2xl", "5xl"]}
                  fontWeight="700"
                >
                  Oceania
                </Text>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
  )
}