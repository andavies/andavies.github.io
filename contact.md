---
title: Contact
layout: page
---

<p style="text-align: center">Contact me using the form below and I'll get back to you as soon as possible. Alternatively, you can email me at hello@andy-davies.me</p>

<form class="contact-form" method="POST" action="https://formspree.io/hello@andy-davies.me">
  <input type="email" name="email" placeholder="Your email">
  <input type="tel" name="telephone" placeholder="Your phone number (optional)">
  <input type="hidden" name="_next" value="{{ site.url }}/thanks.html" />
  <textarea name="message" placeholder="Your message"></textarea>

  <!--http://stackoverflow.com/questions/35464067/flexbox-not-working-on-button-element-in-some-browsers/35466231 -->
  <button type="submit"><span class="button">send</span></button>
</form>