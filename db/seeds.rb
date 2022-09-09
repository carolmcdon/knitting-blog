puts "Seeding data..."
User.destroy_all
Post.destroy_all
Comment.destroy_all

user1 = User.create(name: "Carol", email: "carol@123.com", username: "carol123", password: "123", profile_image: "https://cdn4.vectorstock.com/i/1000x1000/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg", about: "really cool")
user2 = User.create(name: "Susan", email: "susan@123.com", username: "susan1990", password: "123", profile_image: "https://cdn4.vectorstock.com/i/1000x1000/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg", about: "really nice")
user3 = User.create(name: "Betsy", email: "betsy@123.com", username: "betsy23", password: "123", profile_image: "https://cdn4.vectorstock.com/i/1000x1000/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg", about: "really funny")
user4 = User.create(name: "Polly", email: "polly@123.com", username: "polly100", password: "123", profile_image: "https://cdn4.vectorstock.com/i/1000x1000/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg", about: "really interesting")
user5 = User.create(name: "Wendy", email: "wendy@123.com", username: "wendy0909", password: "123", profile_image: "https://cdn4.vectorstock.com/i/1000x1000/82/33/person-gray-photo-placeholder-woman-vector-24138233.jpg", about: "really lame")

post1 = Post.create(
post_title: "Coffee Club Sweater", 
post_date: "08/23/22", 
user_id: user1.id,
post_content: "Back Hem: With smaller needles, CO 51[59, 65, 71, 77, 83, 89] sts.
Row 1 [WS]: P1, (k1, p1) to end of row.
Row 2 [RS]: (K1, p1) to last st, k1.
Repeat Rows 1-2 11 times more, then rep Row 1 once. Break yarn and place sts on holder.

Front Hem: With smaller needles, CO 51[59, 65, 71, 77, 83, 89] sts.
Row 1 [WS]: P1, (k1, p1) to end of row.
Row 2 [RS]: (K1, p1) to last st, k1.
Repeat Rows 1-2 six times more, then rep Row 1 once. Do not break yarn.

Body: With RS of Front Hem and Back Hem facing and using larger needles, knit across 51[59, 65, 71, 77, 83, 89] front sts, pm, knit across 51[59, 65, 71, 77, 83, 89] back sts, pm and join to work in the round. 102[118, 130, 142, 154, 166, 178] sts.
Knit 5 rounds.
Increase round: *K6, M1R, knit to 6 sts before m, M1L, k6, sl m; rep from * once more. 4 sts increased.
Knit 11 rounds.
Repeat last 12 rounds once more. 110[126, 138, 150, 162, 174, 186] sts.
Repeat Increase round.
Knit 3 rounds.
Rep last 4 rounds once more, then repeat Increase round once. 122[138, 150, 162, 174, 186, 198] sts.
Work even in St st until piece measures 12 inches/30.5 cm from joining.
Place first 61[69, 75, 81, 87, 93, 99] sts of round on holder for Front if desired. Turn and cont working back and forth on last 61[69, 75, 81, 87, 93, 99] sts of round for Back only.

Back: Beg with a WS row, work in St st until piece measures 5.5[6, 6.5, 7, 7.5, 8, 8.5] inches/ 14[15, 16.5, 18, 19, 20.5, 21.5] cm from division of Front and Back, ending after a WS row.

Sleeves: With needles for working small circumference in the round, RS facing, and starting at underarm (at separation of Front and Back), pick up and knit 40[42, 44, 46, 48, 50, 52] sts evenly around arm hole. PM and join to work in the round.
Knit 1 round.
Knit 7 rounds.
Decrease round: K1, k2tog, knit to the last 2 sts, ssk. 2 stitches decreased.
Repeat last 8 rounds 4 times more. 30[32, 34, 36, 38, 40, 42] sts.
Knit 7 rounds.
Change to smaller needles.
Rib round: (K1, p1) around.
Rep last round 14 times more.
BO in rib patt.
Repeat for other sleeve.
",
materials: "Yarn: Berroco Regatta [100% cotton 164 yd/150m per3.5 oz/100 g skein]; 9564: Newport; 4[4, 4, 5, 5, 6, 6] skeins
Needle size:
1 US #10.5/6.5mm circular needle, 32-40 inches/80-100 cm long
1 US #10/6mm circular needle, 32-40 inches/80-100 cm long",
post_image1: "https://images.squarespace-cdn.com/content/v1/6005e7033294c7562433d3b3/1622688025716-54BGSUEEUVOOHHPN3VBC/IMG_2625.JPG?format=1000w"
)

post2 = Post.create(
post_title: "Beer Koozie", 
post_date: "06/19/22", 
user_id: user1.id,
post_content: "Cast on 40 stitches
Place a marker and join…knit one round
*K2, P2 * repeat to end of round
Continue with K2, P2, for about 1 inch (not critical…personal preference)
When you have desired amount of ribbing….knit every round
Continue knitting every round until piece measures about 3 ½ to 3 ¾ inches from cast on edge
Then begin to decrease for the bottom

Round 1: Purl
Round 2: *K8, K2tog* repeat to end (36 stitches)
Round 3: Purl
Round 4: *K7, K2tog* repeat to end (32 stitches)
Round 5: Purl
Round 6: *K6, K2tog* repeat to end (28 stitches)
Round 7: Purl
Round 8: *K5, K2tog* repeat to end (24 stitches)
Round 9: Purl
Round 10: *K4, K2tog* repeat to end (20 stitches)
Round 11: Purl
Round 12: *K3, K2tog* repeat to end (16 stitches)
Round 13: Purl
Round 14: *K2, K2tog* repeat to end (12 stitches)
Round 15: Purl
Round 16: *K1, K2tog* repeat to end (8 stitches)
Round 17: Purl
Cut yarn leaving tail about 4-5 inches long
Pull the tail through the remaining stitches and tug tightly
Secure the tail and weave in the ends

The bottom will have a cone shape…not to worry…this forms to the

shape of the bottom of your soda can You could choose to do

the K2, P2 ribbing the full length of the cozy until

the decreases begin to change it up a bit. Or you could add random

purl rows through out the length of the sides just to vary the

design…have fun and experiment!
Just wanted to add that when these get dirty, just toss them in the wash with towels and they're good to go for more use.",
materials: "US Size 7 Double Point Needles
100 % Cotton Yarn",
post_image1: "https://i.pinimg.com/564x/f9/1d/43/f91d4312d4570a364b0ac9b112835da2.jpg"
)

post3 = Post.create(
post_title: "Knitted Elephant", 
post_date: "05/24/22", 
user_id: user2.id,
post_content: "Body (make 2 pieces)

Beg at lower edge using the thumb method and A, cast on 35 sts.

First and next 4 foll alt rows: P.

Inc row: K10, m1, k15, m1, k10 (37 sts).

Inc row: K11, m1, k15, m1, k11 (39 sts).

Inc row: K12, m1, k15, m1, k12 (41 sts).

Inc row: K13, m1, k15, m1, k13 (43 sts).

Inc row: K14, m1, k15, m1, k14 (45 sts).

Beg with a p row, work in St st for 11 rows.

Dec row: K2tog, k to last 2 sts, k2tog tbl.

Next row: P.

Rep last 2 rows 12 more times (19 sts).

Bind off.

Base

Using the thumb method and A, cast on 20 sts.

First row: P.

Inc row: K1, m1, k to last st, m1, k1.

Rep first 2 rows 5 more times (32 sts).

Beg with a p row, work in St st for 5 rows.

Dec row: K2tog, k to last 2 sts, k2tog tbl.

Next row: P.

Rep last 2 rows 5 more times (20 sts).

Bind off.

Hind legs (make 2)

Using the thumb method and A, cast on 32 sts.

Beg with a p row, work in St st for 21 rows.

Dec row: (K2, k2tog) to end (24 sts).

Next and next foll alt row: P

Dec row: (K1, k2tog) to end (16 sts).
",
materials: "Any light worsted weight yarn:

350yd (1 3/4oz/100g) gray (A)

70yd (3/4oz/20g) white (B)

Scraps of black for features

Note: amounts are generous but approximate

A pair of size 3 U.S. (3.25mm) needles

Polyester fiberfill

Straight pins

Tweezers for stuffing small parts (optional)

",
post_image1: "https://coolcreativity.com/wp-content/uploads/2017/03/Free-Elephant-Toy-Knitting-Pattern.jpg"
)

post4 = Post.create(
post_title: "Cable Knit Hat", 
post_date: "07/05/22", 
user_id: user1.id,
post_content: "Using smaller needles, CO 42 sts using long tail cast on.
Join to work in the round. Place stitch marker for BOR.
Rows 1-6: *K1, P1, repeat from * to BOR
Begin Cable Pattern
Change to larger needles
Rows 1, 3 & 5: K10, P1, K10, P1, K to BOR Row 2: K10, P1, 2/2 RC, K2, 2/2 RC, P1, K to BOR
Row 4: K10, P1, K4, 2/2 RC, K2, P1, K to BOR
Row 6: K10, P1, K2, 2/2 RC, K4, P1, K to BOR
Repeat rows 1-6 of cable pattern two more times.
Crown
Change to double pointed needles if necessary
Row 1: *K1, K2tog, repeat from * to BOR Row 2: K to BOR
Row 3: *K2tog, repeat from * to BOR Row 4: *K2tog, repeat from * to BOR
Finishing
Break yarn and using tapestry needle, thread yarn through all remaining stitches. Pull to close in hat. Weave in all ends. Optional: Attach pom pom.
",
materials: "70-80 yards (64-74 meters)
Super Bulky
Freia Fine Handpaints
Single Ply 100% Wool
150g/5.28 oz - 87 yards/ 79 meters
Needles
US 13 (9 mm) circular needles or preferred needles for working a small circumference
US 15 (10 mm) circular needles or preferred needles for working a small circumference
",
post_image1: "https://i.pinimg.com/564x/2a/20/e3/2a20e36a6a79c769af1f943efc5421bd.jpg"
)

post5 = Post.create(
post_title: "Baby Blanket", 
post_date: "07/18/22", 
user_id: user3.id,
post_content: "With Oatmeal, cast on 84 sts.

Beginning Garter Section

Rows 1 – 22 K each st across the row.

CC Fisherman

Seed Stitch Section

Row 1 K8, *k1, p1; repeat from * across to last 8 sts, k8.

Row 2 K8, *p1, k1; repeat from * across to last 8 sts, k8.

Repeat rows 1 & 2 of this Seed Stitch Section until you've used one skein of Fisherman, or until you've worked approximately 22 rows of seed stitch.
CC Moonlight

Stockinette Section

Row 1 (RS) Knit across the row.

Row 2(WS) K8, purl across to last 8 sts, k8.

Repeat rows 1 & 2 until you've used one skein of Moonlight (approximately 19 rows).

Continue knitting the blanket, using the same colors as used previously for each section, as follows:

Repeat the Seed Stitch Section, ending on a (WS) wrong side row.

Repeat the Stockinette Section.
",
materials: "3 skeins Lion Brand Yarn Wool Ease Thick & Quick in Fisherman 170 g/skein

2 skeins Lion Brand Yarn Wool Ease Thick & Quick in Moonlight 140 g/skein

2 skeins Lion Brand Yarn Wool Ease Thick & Quick in Oatmeal 170 g/skein",
post_image1: "https://media.weareknitters.com/media/catalog/product/cache/c523bcbc792501407e15aa6f58ea0772/k/n/knitting-kit-petite-wool-sweetie-blanket_EN-01.jpg"
)


comment1 = Comment.create(comment_content: "Super easy to follow pattern! Love how it turned out.", comment_date: "09/01/22", user_id: user2.id, post_id: post1.id)
comment2 = Comment.create(comment_content: "Had to add a couple of rows on the back to make it long enough, but I think it fits great. Thanks for this pattern!", comment_date: "09/03/22", user_id: user1.id, post_id: post1.id)
comment3 = Comment.create(comment_content: "Can't wait to try this one out!", comment_date: "09/02/22", user_id: user3.id, post_id: post1.id)
comment4 = Comment.create(comment_content: "Such a good idea for gifts! Going to try to knock out a bunch of these.", comment_date: "07/15/22", user_id: user4.id, post_id: post2.id)
comment5 = Comment.create(comment_content: "Made these for my friend and she loved them", comment_date: "07/13/22", user_id: user5.id, post_id: post2.id)
comment6 = Comment.create(comment_content: "Soooo cute!! Going to make this for my nephew", comment_date: "06/14/22", user_id: user2.id, post_id: post3.id)
comment7 = Comment.create(comment_content: "Adorable!", comment_date: "06/03/22", user_id: user3.id, post_id: post3.id)


puts "Seeding done :)"