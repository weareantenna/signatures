<template>
  <div style="display:flex; margin-top: 60px; padding: 0 20px;">
    <br>
    <div ref="html">
        <table border="0" cellpadding="0" cellspacing="0" id="antenna-sig" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse; width:750px;">
            <tbody>
            <tr></tr>
            <tr>
                <td style="padding:0px!important;"><table id="inner-table" border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                    <tbody>
                    <tr>
                        <td valign="top" style="padding-right: 8px;"><table border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                            <tbody>
                            <tr valign="top">
                                <td valign="top" style="border-collapse: collapse; line-height: 0px; padding-right: 1px;"><p style="margin: 0.04px;"><img height="43" width="48" alt="Antenna" border="0" :src="parseImg('/uploads/antenna-smiley.png')"></p></td>
                            </tr>
                            </tbody>
                        </table></td>
                        <td style="border-collapse:collapse;padding-right:10px;"></td>
                        <td style="padding:0px!important;">
                            <table border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                                <tbody>
                                <tr>
                                    <td style="border-collapse: collapse; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-style: normal; line-height: 28px; font-weight: 700;"><p style="margin: 0.04px;"><span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-style: normal; line-height: 28px; font-weight: 700; color: #2E2E2E; display: inline;">{{person.name}}</span></p></td>
                                </tr>
                                </tbody>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                                <tbody>
                                <tr>
                                    <td style="border-collapse: collapse; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; font-style: normal; line-height: 12px; font-weight: 700; padding-bottom: 16px;"><p style="margin: 0.04px;"><span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 12px; font-weight: 500; color: #5541F0; display: inline;">{{ person.title }}</span></p></td>
                                </tr>
                                </tbody>
                            </table>
                            <table v-if="person.phone" border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                                <tbody>
                                <tr>
                                    <td style="border-collapse:collapse;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-style:normal;line-height:17px;font-weight:400;padding:0px!important;"><p style="margin: 0.04px;"><span style="font-family:font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 17px; font-weight: 400; color: #000000; display: inline;"><a :href="`tel:${hrefify(person.phone)}`" style="font-family:font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 17px; font-weight: 400; color: #000000; display: inline; text-decoration: none;">{{ person.phone }}</a>&nbsp;—&nbsp;</span><span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 17px; font-weight: 400; color: #000000; display: inline;"><a href="https://goo.gl/maps/bmwdyNeHN6sTxG31A" style="font-family:font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 17px; font-weight: 400; color: #000000; display: inline; text-decoration: none;" target="_blank">Farmanstraat 40, 9000 Gent</a></span></p></td>
                                </tr>
                                </tbody>
                            </table>

                            <table border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                                <tbody>
                                <tr>
                                    <td style="border-collapse: collapse; line-height: 0px; padding-right: 1px;padding-botttom: 16px;"><p style="margin-bottom: 20px; margin-left: 0.04px; margin-right: 0.04px; margin-top: 0.04px;"><img height="10" width="55" alt="Antenna" border="0" :src="parseImg('/uploads/antenna-logo.png')"><span style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 17px; font-weight: 700; color: #2E2E2E; display: inline;">&nbsp;—&nbsp;<a href="https://weareantenna.be/" style="font-family:font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; line-height: 17px; font-weight: 700; color: #2E2E2E; display: inline; text-decoration: none;" target="_blank">weareantenna.be</a></span></p></td>
                                </tr>
                                </tbody>
                            </table>
                            <table border="0" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;">
                                <tbody>
                                <tr>
                                    <td style="border-collapse:collapse;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-style:normal;line-height:17px;font-weight:400;padding-bottom: 32px;"><p style="margin: 0.04px;"></p></td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table></td>
            </tr>
            <tr>
                <td style="border-collapse:collapse;padding-bottom:16px;">&nbsp;</td>
            </tr>
            </tbody>
        </table>
        <br/>
        <br/>
    </div>
    <textarea v-if="html" v-model="content" disabled style="width: 600px; height: 300px;" />
  </div>
</template>

<script>
  export default {
    name: "Signature",
    props: ['person', 'html', 'language'],
    data() {
      return {
        content: '',
      }
    },
    mounted() {
      this.content = this.$refs.html.innerHTML;
    },
    methods: {
      getPhoneLabelForLang(lang) {
        if (lang === 'fr') {
          return 'Général:';
        }

        if (lang === 'en') {
          return 'General:';
        }

        return "Alg.:";
      },
      parseImg(img) {
        if (img.includes('http')) {
          return img;
        }

        return 'https://antenna-signatures.netlify.app/' + img;
      },
      hrefify(phone) {
        return 'tel:' + phone.replace(' ', '').replace('(0)','');
      }
    }
  }
</script>
<style>
