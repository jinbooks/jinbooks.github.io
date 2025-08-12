window.onload = function () {
 // 顶部导航
 initNavicat();

 

  // banner swiper
  const mySwiper = new Swiper(".swiper-container", {
    loop: false,
    autoplay: 3000,
    // autoplay:false,
    slideToClickedSlide: true,
    // direction: 'horizontal',
    pagination: ".swiper-pagination", // 分页器
    paginationClickable: true,
    navigation: {
      nextEl: ".swiper-button-next", //切换箭头
      prevEl: ".swiper-button-prev",
    },
  });

  // 合作伙伴
  for (var j = 1; j <= 5; j++) {
    const tempObj = new Limarquee(".ad-list" + j);
    tempObj.render({
      direction: "left", // 滚动方向，可选 left / right / up / down
      loop: -1, // 循环次数，-1 为无限循环
      scrolldelay: 0, // 每次重复之前的延迟
      scrollamount: 50, // 滚动速度，越大越快
      circular: true, // 无缝滚动，如果为 false， 则和 marquee 效果一样
      drag: true, // 鼠标可拖动
      runshort: true, // 内容不足是否滚动
      hoverstop: true, // 鼠标悬停暂停
      xml: false, // 加载 xml 文件
      inverthover: false, // 反向，即默认不滚动，鼠 标悬停滚动
    });
  }
 // globe
 initGlobe();
 
};

function initNavicat() {
  $(".maxkey-nav-list>li")
    .on("mouseenter", function () {
      $(this).addClass("get-in");
    })
    .on("mouseleave", function () {
      if ($(this).hasClass("dropdown") && $(this).find(".get-in").length > 0) {
        $(this).removeClass("get-in");
      } else {
        $(this).removeClass("get-in");
      }
    });

  $(".maxkey-nav-list>li>.sub-menu>li")
    .on("mouseenter", function () {
      $(this).addClass("get-in");
    })
    .on("mouseleave", function () {
      if ($(this).hasClass("dropright") && $(this).find(".get-in").length > 0) {
        $(this).removeClass("get-in");
      } else {
        $(this).removeClass("get-in");
      }
    });

  $(".maxkey-nav-list a").on("click", function (e) {
    const level = $(this).parentsUntil(".maxkey-nav-list");
    console.log(level);
    console.log(level.length);
    if (level.length === 5) {
      $(".active").each(function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        }
      });
      $(level[0]).addClass("active");
      $(level[2]).addClass("active");
      $(level[4]).addClass("active");
    }
    if (level.length === 3) {
      if ($(this).parent().find(".sub-menu").length == 0) {
        $(this).parents("li").siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(level[0]).addClass("active");
        $(level[2]).addClass("active");
      } else {
        e.stopPropagation();
      }
    }
    if (level.length === 1) {
      if ($(this).parent().find(".sub-menu").length == 0) {
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
      } else {
        e.stopPropagation();
      }
    }
  });

  $(".download-btn .btn").on("click", function (e) {});

  $(".download-btn")
    .on("mouseenter", function () {
      $(".dropdown-menu").addClass("show");
    })
    .on("mouseleave", function () {
      $(".dropdown-menu").removeClass("show");
    });
  $(".dropdown-menu").on("mouseleave", function () {
    $(this).removeClass("show");
  });

  $(".download-btn a").on("click", function () {
    $(".active").each(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      }
    });
    $(this).parent().addClass("active");
  });
}

function initGlobe() {
  var chartDom = document.getElementsByClassName("globe");
  var r = jsonData
    .filter(function (dataItem) {
      return dataItem[2] > 0;
    })
    .map(function (dataItem) {
      return [
        dataItem[0],
        dataItem[1],
        dataItem[2] < 4 ? Math.sqrt(dataItem[2]) : 1,
      ];
    });
  var options = {
    backgroundColor: "rgba(0,0,0,0)",
    visualMap: {
      show: false,
      min: 0,
      max: 60,
      inRange: {
        symbolSize: [1.8, 10.0],
      },
    },
    globe: {
      environment: "auto",
      baseTexture: "../images/ball/earth2.png",
      heightTexture: "../images/ball/earth.jpg",
      displacementScale: 0,
      displacementQuality: "high",
      globeRadius: 100,
      globeOuterRadius: 100,
      // baseColor: 'rgba(0, 0, 0,0)',
      shading: "color",
      silent: true,
      realisticMaterial: {
        roughness: 0.8,
        // metalness:0.5
      },
      postEffect: {
        enable: false,
        depthOfField: {
          focalRange: 80,
          enable: true,
          focalDistance: 1,
        },
      },
      temporalSuperSampling: {
        enable: false,
      },
      light: {
        ambient: {
          color: "#fff",
          intensity: 0.1,
        },
        main: {
          intensity: 4,
          shadow: false,
        },
        ambientCubemap: {
          // texture: ROOT_PATH + '/data-gl/asset/lake.hdr',
          exposure: 5,
          diffuseIntensity: 0.1,
          specularIntensity: 2,
        },
      },
      viewControl: {
        autoRotate: true,

        autoRotateSpeed: 2,
        projection: "perspective",
        beta: 121,
        alpha: 15,
        distance: 160,
        center: [0, 0, 0],
        targetCoord: [121, 15, 51.643973510952854],
      },
    },

    series: [
      {
        type: "scatter3D",
        coordinateSystem: "globe",
        blendMode: "source-over",
        symbol: "circle",
        symbolSize: 100,
        itemStyle: {
          color: "#F4B840",
          borderWidth: 6,
          borderRadius: 100,
          borderColor: "#F4B840",
          opacity: 1,
        },
        data: [
          [66.33, 51.05, 2.9664793948382653],
          [53, 64, 2.9664793948382653],
          [56.33, 30.05, 20.9664793948382653],
          [68, 42, 4.012480529547776],
          [45, 22, 3.5071355833500366],
          [69.5, 29, 11.878552100319297],
          [45, 22, 3.5071355833500366],
          [18, 41, 16.140012391568973],
        ],
      },
      {
        type: "scatter3D",
        coordinateSystem: "globe",
        blendMode: "source-over",
        symbol: "circle",
        symbolSize: 0.2,
        itemStyle: {
          color: "#BFC3D5",
          opacity: 1,
        },
        data: r,
      },
      {
        type: "lines3D",
        coordinateSystem: "globe",
        blendMode: "source-cover",
        // zlevel: ,
        effect: {
          show: true,
          period: 1,
          trailWidth: 2.5,
          trailLength: 0.7,
          trailOpacity: 3,
          trailColor: "rgb(255, 215,0)",
        },
        lineStyle: {
          width: 3,
          color: "rgb(255, 215,0)",
          opacity: 0.9,
          trailWidth: 4,
          trailLength: 0.3,
        }, //3D飞线图
        data: [
          [
            [113.5, 31.5, 24.537726056014236],
            [66.33, 51.05, 2.9664793948382653],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [53, 64, 2.9664793948382653],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [68, 42, 4.012480529547776],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [18, 41, 16.140012391568973],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [56.33, 30.05, 20.9664793948382653],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [45, 22, 3.5071355833500366],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [73.33, 135.05, 2.9664793948382653],
          ],
          [
            [113.5, 31.5, 24.537726056014236],
            [69.5, 29, 11.878552100319297],
          ],
        ],
      },
    ],
  };
  for (var i = 0; i < chartDom.length; i++) {
    var chart = echarts.init(chartDom[i]);
    chart.setOption(options);
    window.addEventListener("resize", function () {
      setTimeout(function () {
        chart.resize();
      }, 200);
    });
    chart.on("click", function (params) {
      console.log(params);
    });
  }
}
