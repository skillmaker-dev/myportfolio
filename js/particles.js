var pJS = function (d, c) {
  var b = document.querySelector("#" + d + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: b, w: b.offsetWidth, h: b.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var a = this.pJS;
  c && Object.deepExtend(a, c),
    (a.tmp.obj = {
      size_value: a.particles.size.value,
      size_anim_speed: a.particles.size.anim.speed,
      move_speed: a.particles.move.speed,
      line_linked_distance: a.particles.line_linked.distance,
      line_linked_width: a.particles.line_linked.width,
      mode_grab_distance: a.interactivity.modes.grab.distance,
      mode_bubble_distance: a.interactivity.modes.bubble.distance,
      mode_bubble_size: a.interactivity.modes.bubble.size,
      mode_repulse_distance: a.interactivity.modes.repulse.distance,
    }),
    (a.fn.retinaInit = function () {
      a.retina_detect && window.devicePixelRatio > 1
        ? ((a.canvas.pxratio = window.devicePixelRatio), (a.tmp.retina = !0))
        : ((a.canvas.pxratio = 1), (a.tmp.retina = !1)),
        (a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio),
        (a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio),
        (a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio),
        (a.particles.size.anim.speed =
          a.tmp.obj.size_anim_speed * a.canvas.pxratio),
        (a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio),
        (a.particles.line_linked.distance =
          a.tmp.obj.line_linked_distance * a.canvas.pxratio),
        (a.interactivity.modes.grab.distance =
          a.tmp.obj.mode_grab_distance * a.canvas.pxratio),
        (a.interactivity.modes.bubble.distance =
          a.tmp.obj.mode_bubble_distance * a.canvas.pxratio),
        (a.particles.line_linked.width =
          a.tmp.obj.line_linked_width * a.canvas.pxratio),
        (a.interactivity.modes.bubble.size =
          a.tmp.obj.mode_bubble_size * a.canvas.pxratio),
        (a.interactivity.modes.repulse.distance =
          a.tmp.obj.mode_repulse_distance * a.canvas.pxratio);
    }),
    (a.fn.canvasInit = function () {
      a.canvas.ctx = a.canvas.el.getContext("2d");
    }),
    (a.fn.canvasSize = function () {
      (a.canvas.el.width = a.canvas.w),
        (a.canvas.el.height = a.canvas.h),
        a &&
          a.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (a.canvas.w = a.canvas.el.offsetWidth),
              (a.canvas.h = a.canvas.el.offsetHeight),
              a.tmp.retina &&
                ((a.canvas.w *= a.canvas.pxratio),
                (a.canvas.h *= a.canvas.pxratio)),
              (a.canvas.el.width = a.canvas.w),
              (a.canvas.el.height = a.canvas.h),
              a.particles.move.enable ||
                (a.fn.particlesEmpty(),
                a.fn.particlesCreate(),
                a.fn.particlesDraw(),
                a.fn.vendors.densityAutoParticles()),
              a.fn.vendors.densityAutoParticles();
          });
    }),
    (a.fn.canvasPaint = function () {
      a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h);
    }),
    (a.fn.canvasClear = function () {
      a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h);
    }),
    (a.fn.particle = function (b, i, d) {
      if (
        ((this.radius =
          (a.particles.size.random ? Math.random() : 1) *
          a.particles.size.value),
        a.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = a.particles.size.anim.speed / 100),
          a.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = d ? d.x : Math.random() * a.canvas.w),
        (this.y = d ? d.y : Math.random() * a.canvas.h),
        this.x > a.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > a.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        a.particles.move.bounce && a.fn.vendors.checkOverlap(this, d),
        (this.color = {}),
        "object" == typeof b.value)
      ) {
        if (b.value instanceof Array) {
          var g =
            b.value[Math.floor(Math.random() * a.particles.color.value.length)];
          this.color.rgb = hexToRgb(g);
        } else
          void 0 != b.value.r &&
            void 0 != b.value.g &&
            void 0 != b.value.b &&
            (this.color.rgb = { r: b.value.r, g: b.value.g, b: b.value.b }),
            void 0 != b.value.h &&
              void 0 != b.value.s &&
              void 0 != b.value.l &&
              (this.color.hsl = { h: b.value.h, s: b.value.s, l: b.value.l });
      } else
        "random" == b.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof b.value &&
            ((this.color = b), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (a.particles.opacity.random ? Math.random() : 1) *
        a.particles.opacity.value),
        a.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = a.particles.opacity.anim.speed / 100),
          a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var c = {};
      switch (a.particles.move.direction) {
        case "top":
          c = { x: 0, y: -1 };
          break;
        case "top-right":
          c = { x: 0.5, y: -0.5 };
          break;
        case "right":
          c = { x: 1, y: -0 };
          break;
        case "bottom-right":
          c = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          c = { x: 0, y: 1 };
          break;
        case "bottom-left":
          c = { x: -0.5, y: 1 };
          break;
        case "left":
          c = { x: -1, y: 0 };
          break;
        case "top-left":
          c = { x: -0.5, y: -0.5 };
          break;
        default:
          c = { x: 0, y: 0 };
      }
      a.particles.move.straight
        ? ((this.vx = c.x),
          (this.vy = c.y),
          a.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = c.x + Math.random() - 0.5),
          (this.vy = c.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var e = a.particles.shape.type;
      if ("object" == typeof e) {
        if (e instanceof Array) {
          var h = e[Math.floor(Math.random() * e.length)];
          this.shape = h;
        }
      } else this.shape = e;
      if ("image" == this.shape) {
        var f = a.particles.shape;
        (this.img = {
          src: f.image.src,
          ratio: f.image.width / f.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == a.tmp.img_type &&
            void 0 != a.tmp.source_svg &&
            (a.fn.vendors.createSvgImg(this),
            a.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (a.fn.particle.prototype.draw = function () {
      if (void 0 != this.radius_bubble) var b = this.radius_bubble;
      else var b = this.radius;
      if (void 0 != this.opacity_bubble) var c = this.opacity_bubble;
      else var c = this.opacity;
      if (this.color.rgb)
        var e =
          "rgba(" +
          this.color.rgb.r +
          "," +
          this.color.rgb.g +
          "," +
          this.color.rgb.b +
          "," +
          c +
          ")";
      else
        var e =
          "hsla(" +
          this.color.hsl.h +
          "," +
          this.color.hsl.s +
          "%," +
          this.color.hsl.l +
          "%," +
          c +
          ")";
      switch (
        ((a.canvas.ctx.fillStyle = e), a.canvas.ctx.beginPath(), this.shape)
      ) {
        case "circle":
          a.canvas.ctx.arc(this.x, this.y, b, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          a.canvas.ctx.rect(this.x - b, this.y - b, 2 * b, 2 * b);
          break;
        case "triangle":
          a.fn.vendors.drawShape(
            a.canvas.ctx,
            this.x - b,
            this.y + b / 1.66,
            2 * b,
            3,
            2
          );
          break;
        case "polygon":
          a.fn.vendors.drawShape(
            a.canvas.ctx,
            this.x - b / (a.particles.shape.polygon.nb_sides / 3.5),
            this.y - b / 0.76,
            (2.66 * b) / (a.particles.shape.polygon.nb_sides / 3),
            a.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          a.fn.vendors.drawShape(
            a.canvas.ctx,
            this.x - (2 * b) / (a.particles.shape.polygon.nb_sides / 4),
            this.y - b / 1.52,
            (5.32 * b) / (a.particles.shape.polygon.nb_sides / 3),
            a.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == a.tmp.img_type) var d = this.img.obj;
          else var d = a.tmp.img_obj;
          d &&
            a.canvas.ctx.drawImage(
              d,
              this.x - b,
              this.y - b,
              2 * b,
              (2 * b) / this.img.ratio
            );
      }
      a.canvas.ctx.closePath(),
        a.particles.shape.stroke.width > 0 &&
          ((a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color),
          (a.canvas.ctx.lineWidth = a.particles.shape.stroke.width),
          a.canvas.ctx.stroke()),
        a.canvas.ctx.fill();
    }),
    (a.fn.particlesCreate = function () {
      for (var b = 0; b < a.particles.number.value; b++)
        a.particles.array.push(
          new a.fn.particle(a.particles.color, a.particles.opacity.value)
        );
    }),
    (a.fn.particlesUpdate = function () {
      for (var d = 0; d < a.particles.array.length; d++) {
        var b = a.particles.array[d];
        if (a.particles.move.enable) {
          var g = a.particles.move.speed / 2;
          (b.x += b.vx * g), (b.y += b.vy * g);
        }
        if (
          (a.particles.opacity.anim.enable &&
            (!0 == b.opacity_status
              ? (b.opacity >= a.particles.opacity.value &&
                  (b.opacity_status = !1),
                (b.opacity += b.vo))
              : (b.opacity <= a.particles.opacity.anim.opacity_min &&
                  (b.opacity_status = !0),
                (b.opacity -= b.vo)),
            b.opacity < 0 && (b.opacity = 0)),
          a.particles.size.anim.enable &&
            (!0 == b.size_status
              ? (b.radius >= a.particles.size.value && (b.size_status = !1),
                (b.radius += b.vs))
              : (b.radius <= a.particles.size.anim.size_min &&
                  (b.size_status = !0),
                (b.radius -= b.vs)),
            b.radius < 0 && (b.radius = 0)),
          "bounce" == a.particles.move.out_mode)
        )
          var c = {
            x_left: b.radius,
            x_right: a.canvas.w,
            y_top: b.radius,
            y_bottom: a.canvas.h,
          };
        else
          var c = {
            x_left: -b.radius,
            x_right: a.canvas.w + b.radius,
            y_top: -b.radius,
            y_bottom: a.canvas.h + b.radius,
          };
        if (
          (b.x - b.radius > a.canvas.w
            ? ((b.x = c.x_left), (b.y = Math.random() * a.canvas.h))
            : b.x + b.radius < 0 &&
              ((b.x = c.x_right), (b.y = Math.random() * a.canvas.h)),
          b.y - b.radius > a.canvas.h
            ? ((b.y = c.y_top), (b.x = Math.random() * a.canvas.w))
            : b.y + b.radius < 0 &&
              ((b.y = c.y_bottom), (b.x = Math.random() * a.canvas.w)),
          "bounce" === a.particles.move.out_mode &&
            (b.x + b.radius > a.canvas.w
              ? (b.vx = -b.vx)
              : b.x - b.radius < 0 && (b.vx = -b.vx),
            b.y + b.radius > a.canvas.h
              ? (b.vy = -b.vy)
              : b.y - b.radius < 0 && (b.vy = -b.vy)),
          isInArray("grab", a.interactivity.events.onhover.mode) &&
            a.fn.modes.grabParticle(b),
          (isInArray("bubble", a.interactivity.events.onhover.mode) ||
            isInArray("bubble", a.interactivity.events.onclick.mode)) &&
            a.fn.modes.bubbleParticle(b),
          (isInArray("repulse", a.interactivity.events.onhover.mode) ||
            isInArray("repulse", a.interactivity.events.onclick.mode)) &&
            a.fn.modes.repulseParticle(b),
          a.particles.line_linked.enable || a.particles.move.attract.enable)
        )
          for (var e = d + 1; e < a.particles.array.length; e++) {
            var f = a.particles.array[e];
            a.particles.line_linked.enable && a.fn.interact.linkParticles(b, f),
              a.particles.move.attract.enable &&
                a.fn.interact.attractParticles(b, f),
              a.particles.move.bounce && a.fn.interact.bounceParticles(b, f);
          }
      }
    }),
    (a.fn.particlesDraw = function () {
      a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h),
        a.fn.particlesUpdate();
      for (var b = 0; b < a.particles.array.length; b++)
        a.particles.array[b].draw();
    }),
    (a.fn.particlesEmpty = function () {
      a.particles.array = [];
    }),
    (a.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(a.fn.checkAnimFrame),
        cancelRequestAnimFrame(a.fn.drawAnimFrame),
        (a.tmp.source_svg = void 0),
        (a.tmp.img_obj = void 0),
        (a.tmp.count_svg = 0),
        a.fn.particlesEmpty(),
        a.fn.canvasClear(),
        a.fn.vendors.start();
    }),
    (a.fn.interact.linkParticles = function (b, c) {
      var e = b.x - c.x,
        f = b.y - c.y,
        g = Math.sqrt(e * e + f * f);
      if (g <= a.particles.line_linked.distance) {
        var h =
          a.particles.line_linked.opacity -
          g /
            (1 / a.particles.line_linked.opacity) /
            a.particles.line_linked.distance;
        if (h > 0) {
          var d = a.particles.line_linked.color_rgb_line;
          (a.canvas.ctx.strokeStyle =
            "rgba(" + d.r + "," + d.g + "," + d.b + "," + h + ")"),
            (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
            a.canvas.ctx.beginPath(),
            a.canvas.ctx.moveTo(b.x, b.y),
            a.canvas.ctx.lineTo(c.x, c.y),
            a.canvas.ctx.stroke(),
            a.canvas.ctx.closePath();
        }
      }
    }),
    (a.fn.interact.attractParticles = function (b, c) {
      var d = b.x - c.x,
        e = b.y - c.y;
      if (Math.sqrt(d * d + e * e) <= a.particles.line_linked.distance) {
        var f = d / (1e3 * a.particles.move.attract.rotateX),
          g = e / (1e3 * a.particles.move.attract.rotateY);
        (b.vx -= f), (b.vy -= g), (c.vx += f), (c.vy += g);
      }
    }),
    (a.fn.interact.bounceParticles = function (a, b) {
      var c = a.x - b.x,
        d = a.y - b.y;
      Math.sqrt(c * c + d * d) <= a.radius + b.radius &&
        ((a.vx = -a.vx), (a.vy = -a.vy), (b.vx = -b.vx), (b.vy = -b.vy));
    }),
    (a.fn.modes.pushParticles = function (d, b) {
      a.tmp.pushing = !0;
      for (var c = 0; c < d; c++)
        a.particles.array.push(
          new a.fn.particle(a.particles.color, a.particles.opacity.value, {
            x: b ? b.pos_x : Math.random() * a.canvas.w,
            y: b ? b.pos_y : Math.random() * a.canvas.h,
          })
        ),
          c == d - 1 &&
            (a.particles.move.enable || a.fn.particlesDraw(),
            (a.tmp.pushing = !1));
    }),
    (a.fn.modes.removeParticles = function (b) {
      a.particles.array.splice(0, b),
        a.particles.move.enable || a.fn.particlesDraw();
    }),
    (a.fn.modes.bubbleParticle = function (b) {
      if (
        a.interactivity.events.onhover.enable &&
        isInArray("bubble", a.interactivity.events.onhover.mode)
      ) {
        var d = b.x - a.interactivity.mouse.pos_x,
          e = b.y - a.interactivity.mouse.pos_y,
          h = Math.sqrt(d * d + e * e),
          f = 1 - h / a.interactivity.modes.bubble.distance;
        function i() {
          (b.opacity_bubble = b.opacity), (b.radius_bubble = b.radius);
        }
        if (h <= a.interactivity.modes.bubble.distance) {
          if (f >= 0 && "mousemove" == a.interactivity.status) {
            if (a.interactivity.modes.bubble.size != a.particles.size.value) {
              if (a.interactivity.modes.bubble.size > a.particles.size.value) {
                var g = b.radius + a.interactivity.modes.bubble.size * f;
                g >= 0 && (b.radius_bubble = g);
              } else {
                var l = b.radius - a.interactivity.modes.bubble.size,
                  g = b.radius - l * f;
                g > 0 ? (b.radius_bubble = g) : (b.radius_bubble = 0);
              }
            }
            if (
              a.interactivity.modes.bubble.opacity != a.particles.opacity.value
            ) {
              if (
                a.interactivity.modes.bubble.opacity > a.particles.opacity.value
              ) {
                var c = a.interactivity.modes.bubble.opacity * f;
                c > b.opacity &&
                  c <= a.interactivity.modes.bubble.opacity &&
                  (b.opacity_bubble = c);
              } else {
                var c =
                  b.opacity -
                  (a.particles.opacity.value -
                    a.interactivity.modes.bubble.opacity) *
                    f;
                c < b.opacity &&
                  c >= a.interactivity.modes.bubble.opacity &&
                  (b.opacity_bubble = c);
              }
            }
          }
        } else i();
        "mouseleave" == a.interactivity.status && i();
      } else if (
        a.interactivity.events.onclick.enable &&
        isInArray("bubble", a.interactivity.events.onclick.mode)
      ) {
        if (a.tmp.bubble_clicking) {
          var d = b.x - a.interactivity.mouse.click_pos_x,
            e = b.y - a.interactivity.mouse.click_pos_y,
            h = Math.sqrt(d * d + e * e),
            j = (new Date().getTime() - a.interactivity.mouse.click_time) / 1e3;
          j > a.interactivity.modes.bubble.duration &&
            (a.tmp.bubble_duration_end = !0),
            j > 2 * a.interactivity.modes.bubble.duration &&
              ((a.tmp.bubble_clicking = !1), (a.tmp.bubble_duration_end = !1));
        }
        function k(c, k, f, e, d) {
          if (c != k) {
            if (a.tmp.bubble_duration_end) {
              if (void 0 != f) {
                var l =
                    e - (j * (e - c)) / a.interactivity.modes.bubble.duration,
                  m = c - l;
                (i = c + m),
                  "size" == d && (b.radius_bubble = i),
                  "opacity" == d && (b.opacity_bubble = i);
              }
            } else if (h <= a.interactivity.modes.bubble.distance) {
              if (void 0 != f) var g = f;
              else var g = e;
              if (g != c) {
                var i =
                  e - (j * (e - c)) / a.interactivity.modes.bubble.duration;
                "size" == d && (b.radius_bubble = i),
                  "opacity" == d && (b.opacity_bubble = i);
              }
            } else
              "size" == d && (b.radius_bubble = void 0),
                "opacity" == d && (b.opacity_bubble = void 0);
          }
        }
        a.tmp.bubble_clicking &&
          (k(
            a.interactivity.modes.bubble.size,
            a.particles.size.value,
            b.radius_bubble,
            b.radius,
            "size"
          ),
          k(
            a.interactivity.modes.bubble.opacity,
            a.particles.opacity.value,
            b.opacity_bubble,
            b.opacity,
            "opacity"
          ));
      }
    }),
    (a.fn.modes.repulseParticle = function (b) {
      if (
        a.interactivity.events.onhover.enable &&
        isInArray("repulse", a.interactivity.events.onhover.mode) &&
        "mousemove" == a.interactivity.status
      ) {
        var e = b.x - a.interactivity.mouse.pos_x,
          f = b.y - a.interactivity.mouse.pos_y,
          g = Math.sqrt(e * e + f * f),
          h = { x: e / g, y: f / g },
          d = a.interactivity.modes.repulse.distance,
          i = clamp((1 / d) * (-1 * Math.pow(g / d, 2) + 1) * d * 100, 0, 50),
          c = { x: b.x + h.x * i, y: b.y + h.y * i };
        "bounce" == a.particles.move.out_mode
          ? (c.x - b.radius > 0 && c.x + b.radius < a.canvas.w && (b.x = c.x),
            c.y - b.radius > 0 && c.y + b.radius < a.canvas.h && (b.y = c.y))
          : ((b.x = c.x), (b.y = c.y));
      } else if (
        a.interactivity.events.onclick.enable &&
        isInArray("repulse", a.interactivity.events.onclick.mode)
      ) {
        if (
          (a.tmp.repulse_finish ||
            (a.tmp.repulse_count++,
            a.tmp.repulse_count != a.particles.array.length ||
              (a.tmp.repulse_finish = !0)),
          a.tmp.repulse_clicking)
        ) {
          var d = Math.pow(a.interactivity.modes.repulse.distance / 6, 3),
            j = a.interactivity.mouse.click_pos_x - b.x,
            k = a.interactivity.mouse.click_pos_y - b.y,
            l = j * j + k * k,
            m = (-d / l) * 1;
          l <= d &&
            (function () {
              var d = Math.atan2(k, j);
              if (
                ((b.vx = m * Math.cos(d)),
                (b.vy = m * Math.sin(d)),
                "bounce" == a.particles.move.out_mode)
              ) {
                var c = { x: b.x + b.vx, y: b.y + b.vy };
                c.x + b.radius > a.canvas.w
                  ? (b.vx = -b.vx)
                  : c.x - b.radius < 0 && (b.vx = -b.vx),
                  c.y + b.radius > a.canvas.h
                    ? (b.vy = -b.vy)
                    : c.y - b.radius < 0 && (b.vy = -b.vy);
              }
            })();
        } else
          !1 == a.tmp.repulse_clicking && ((b.vx = b.vx_i), (b.vy = b.vy_i));
      }
    }),
    (a.fn.modes.grabParticle = function (b) {
      if (
        a.interactivity.events.onhover.enable &&
        "mousemove" == a.interactivity.status
      ) {
        var d = b.x - a.interactivity.mouse.pos_x,
          e = b.y - a.interactivity.mouse.pos_y,
          f = Math.sqrt(d * d + e * e);
        if (f <= a.interactivity.modes.grab.distance) {
          var g =
            a.interactivity.modes.grab.line_linked.opacity -
            f /
              (1 / a.interactivity.modes.grab.line_linked.opacity) /
              a.interactivity.modes.grab.distance;
          if (g > 0) {
            var c = a.particles.line_linked.color_rgb_line;
            (a.canvas.ctx.strokeStyle =
              "rgba(" + c.r + "," + c.g + "," + c.b + "," + g + ")"),
              (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
              a.canvas.ctx.beginPath(),
              a.canvas.ctx.moveTo(b.x, b.y),
              a.canvas.ctx.lineTo(
                a.interactivity.mouse.pos_x,
                a.interactivity.mouse.pos_y
              ),
              a.canvas.ctx.stroke(),
              a.canvas.ctx.closePath();
          }
        }
      }
    }),
    (a.fn.vendors.eventsListeners = function () {
      "window" == a.interactivity.detect_on
        ? (a.interactivity.el = window)
        : (a.interactivity.el = a.canvas.el),
        (a.interactivity.events.onhover.enable ||
          a.interactivity.events.onclick.enable) &&
          (a.interactivity.el.addEventListener("mousemove", function (b) {
            if (a.interactivity.el == window)
              var c = b.clientX,
                d = b.clientY;
            else
              var c = b.offsetX || b.clientX,
                d = b.offsetY || b.clientY;
            (a.interactivity.mouse.pos_x = c),
              (a.interactivity.mouse.pos_y = d),
              a.tmp.retina &&
                ((a.interactivity.mouse.pos_x *= a.canvas.pxratio),
                (a.interactivity.mouse.pos_y *= a.canvas.pxratio)),
              (a.interactivity.status = "mousemove");
          }),
          a.interactivity.el.addEventListener("mouseleave", function (b) {
            (a.interactivity.mouse.pos_x = null),
              (a.interactivity.mouse.pos_y = null),
              (a.interactivity.status = "mouseleave");
          })),
        a.interactivity.events.onclick.enable &&
          a.interactivity.el.addEventListener("click", function () {
            if (
              ((a.interactivity.mouse.click_pos_x =
                a.interactivity.mouse.pos_x),
              (a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y),
              (a.interactivity.mouse.click_time = new Date().getTime()),
              a.interactivity.events.onclick.enable)
            )
              switch (a.interactivity.events.onclick.mode) {
                case "push":
                  a.particles.move.enable
                    ? a.fn.modes.pushParticles(
                        a.interactivity.modes.push.particles_nb,
                        a.interactivity.mouse
                      )
                    : 1 == a.interactivity.modes.push.particles_nb
                    ? a.fn.modes.pushParticles(
                        a.interactivity.modes.push.particles_nb,
                        a.interactivity.mouse
                      )
                    : a.interactivity.modes.push.particles_nb > 1 &&
                      a.fn.modes.pushParticles(
                        a.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  a.fn.modes.removeParticles(
                    a.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  a.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (a.tmp.repulse_clicking = !0),
                    (a.tmp.repulse_count = 0),
                    (a.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      a.tmp.repulse_clicking = !1;
                    }, 1e3 * a.interactivity.modes.repulse.duration);
              }
          });
    }),
    (a.fn.vendors.densityAutoParticles = function () {
      if (a.particles.number.density.enable) {
        var c = (a.canvas.el.width * a.canvas.el.height) / 1e3;
        a.tmp.retina && (c /= 2 * a.canvas.pxratio);
        var d =
            (c * a.particles.number.value) /
            a.particles.number.density.value_area,
          b = a.particles.array.length - d;
        b < 0
          ? a.fn.modes.pushParticles(Math.abs(b))
          : a.fn.modes.removeParticles(b);
      }
    }),
    (a.fn.vendors.checkOverlap = function (b, c) {
      for (var d = 0; d < a.particles.array.length; d++) {
        var e = a.particles.array[d],
          f = b.x - e.x,
          g = b.y - e.y;
        Math.sqrt(f * f + g * g) <= b.radius + e.radius &&
          ((b.x = c ? c.x : Math.random() * a.canvas.w),
          (b.y = c ? c.y : Math.random() * a.canvas.h),
          a.fn.vendors.checkOverlap(b));
      }
    }),
    (a.fn.vendors.createSvgImg = function (g) {
      var c = a.tmp.source_svg.replace(
          /#([0-9A-F]{3,6})/gi,
          function (b, c, d, e) {
            if (g.color.rgb)
              var a =
                "rgba(" +
                g.color.rgb.r +
                "," +
                g.color.rgb.g +
                "," +
                g.color.rgb.b +
                "," +
                g.opacity +
                ")";
            else
              var a =
                "hsla(" +
                g.color.hsl.h +
                "," +
                g.color.hsl.s +
                "%," +
                g.color.hsl.l +
                "%," +
                g.opacity +
                ")";
            return a;
          }
        ),
        d = new Blob([c], { type: "image/svg+xml;charset=utf-8" }),
        e = window.URL || window.webkitURL || window,
        f = e.createObjectURL(d),
        b = new Image();
      b.addEventListener("load", function () {
        (g.img.obj = b),
          (g.img.loaded = !0),
          e.revokeObjectURL(f),
          a.tmp.count_svg++;
      }),
        (b.src = f);
    }),
    (a.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(a.fn.drawAnimFrame), b.remove(), (pJSDom = null);
    }),
    (a.fn.vendors.drawShape = function (a, g, h, b, c, d) {
      var i = c * d,
        e = c / d,
        j = Math.PI - (Math.PI * ((180 * (e - 2)) / e)) / 180;
      a.save(), a.beginPath(), a.translate(g, h), a.moveTo(0, 0);
      for (var f = 0; f < i; f++)
        a.lineTo(b, 0), a.translate(b, 0), a.rotate(j);
      a.fill(), a.restore();
    }),
    (a.fn.vendors.exportImg = function () {
      window.open(a.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (a.fn.vendors.loadImg = function (d) {
      if (((a.tmp.img_error = void 0), "" != a.particles.shape.image.src)) {
        if ("svg" == d) {
          var b = new XMLHttpRequest();
          b.open("GET", a.particles.shape.image.src),
            (b.onreadystatechange = function (c) {
              4 == b.readyState &&
                (200 == b.status
                  ? ((a.tmp.source_svg = c.currentTarget.response),
                    a.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (a.tmp.img_error = !0)));
            }),
            b.send();
        } else {
          var c = new Image();
          c.addEventListener("load", function () {
            (a.tmp.img_obj = c), a.fn.vendors.checkBeforeDraw();
          }),
            (c.src = a.particles.shape.image.src);
        }
      } else console.log("Error pJS - No image.src"), (a.tmp.img_error = !0);
    }),
    (a.fn.vendors.draw = function () {
      "image" == a.particles.shape.type
        ? "svg" == a.tmp.img_type
          ? a.tmp.count_svg >= a.particles.number.value
            ? (a.fn.particlesDraw(),
              a.particles.move.enable
                ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                : cancelRequestAnimFrame(a.fn.drawAnimFrame))
            : a.tmp.img_error ||
              (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
          : void 0 != a.tmp.img_obj
          ? (a.fn.particlesDraw(),
            a.particles.move.enable
              ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
              : cancelRequestAnimFrame(a.fn.drawAnimFrame))
          : a.tmp.img_error ||
            (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
        : (a.fn.particlesDraw(),
          a.particles.move.enable
            ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
            : cancelRequestAnimFrame(a.fn.drawAnimFrame));
    }),
    (a.fn.vendors.checkBeforeDraw = function () {
      "image" == a.particles.shape.type
        ? "svg" == a.tmp.img_type && void 0 == a.tmp.source_svg
          ? (a.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(a.tmp.checkAnimFrame),
            a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw()))
        : (a.fn.vendors.init(), a.fn.vendors.draw());
    }),
    (a.fn.vendors.init = function () {
      a.fn.retinaInit(),
        a.fn.canvasInit(),
        a.fn.canvasSize(),
        a.fn.canvasPaint(),
        a.fn.particlesCreate(),
        a.fn.vendors.densityAutoParticles(),
        (a.particles.line_linked.color_rgb_line = hexToRgb(
          a.particles.line_linked.color
        ));
    }),
    (a.fn.vendors.start = function () {
      isInArray("image", a.particles.shape.type)
        ? ((a.tmp.img_type = a.particles.shape.image.src.substr(
            a.particles.shape.image.src.length - 3
          )),
          a.fn.vendors.loadImg(a.tmp.img_type))
        : a.fn.vendors.checkBeforeDraw();
    }),
    a.fn.vendors.eventsListeners(),
    a.fn.vendors.start();
};
function hexToRgb(b) {
  b = b.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (d, a, b, c) {
    return a + a + b + b + c + c;
  });
  var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);
  return a
    ? { r: parseInt(a[1], 16), g: parseInt(a[2], 16), b: parseInt(a[3], 16) }
    : null;
}
function clamp(a, b, c) {
  return Math.min(Math.max(a, b), c);
}
function isInArray(a, b) {
  return b.indexOf(a) > -1;
}
(Object.deepExtend = function (c, b) {
  for (var a in b)
    b[a] && b[a].constructor && b[a].constructor === Object
      ? ((c[a] = c[a] || {}), arguments.callee(c[a], b[a]))
      : (c[a] = b[a]);
  return c;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (a) {
      window.setTimeout(a, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (a, d) {
    "string" != typeof a && ((d = a), (a = "particles-js")),
      a || (a = "particles-js");
    var e = document.getElementById(a),
      f = "particles-js-canvas-el",
      c = e.getElementsByClassName(f);
    if (c.length) for (; c.length > 0; ) e.removeChild(c[0]);
    var b = document.createElement("canvas");
    (b.className = f),
      (b.style.width = "100%"),
      (b.style.height = "100%"),
      null != document.getElementById(a).appendChild(b) &&
        pJSDom.push(new pJS(a, d));
  }),
  (window.particlesJS.load = function (c, b, d) {
    var a = new XMLHttpRequest();
    a.open("GET", b),
      (a.onreadystatechange = function (b) {
        if (4 == a.readyState) {
          if (200 == a.status) {
            var e = JSON.parse(b.currentTarget.response);
            window.particlesJS(c, e), d && d();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + a.status),
              console.log("Error pJS - File config not found");
        }
      }),
      a.send();
  });
