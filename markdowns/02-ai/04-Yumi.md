## Yumi
# The_Unarchivable

#### 


To most passers-by, pigeons appear almost identical. They belong to the familiar background of the city: birds gathering on pavements, rooftops and window ledges, visible almost everywhere but rarely noticed as individuals. *The Unarchivable* began by interrupting this habitual form of attention. It centred on Huihui and Diandian, two homing pigeons raised by the artist. Although they lived under human care and had individual names and histories, their appearance closely resembled that of the anonymous pigeons encountered across the city. Their position therefore remained uncertain: they were intimate and familiar lives, yet they also belonged visually to a population often treated as an interchangeable urban background.

The project asked whether technologies normally associated with classification, surveillance and identification could be redirected towards overlooked non-human life. Instead of detecting only the general category “pigeon,” could a machine-vision system learn to recognise Huihui and Diandian as separate individuals? Could this process create a space in which non-human life became visible, recordable and open to broader discussion?

Photographs and videos of the two pigeons were selected, cropped, organised and labelled to form a bespoke dataset. A YOLO object-detection model was then trained to distinguish Huihui, Diandian and other pigeons. YOLO frames object detection as a regression problem in which a neural network predicts bounding boxes and associated class probabilities from an image (Redmon et al. 2016, 779–80). It does not encounter a bird as a living subject. Instead, the image is processed as numerical input and translated into coordinates, class labels and confidence values.

Recognition is therefore produced through abstraction. Visual differences are transformed into measurable features and compared with the categories established during training. As Trevor Paglen argues, machine-readable images increasingly operate through classifications, training sets and mathematical abstractions rather than through forms of vision addressed primarily to human spectators (Paglen 2016). What appears through the interface as the recognition of a stable object is consequently the visible result of a series of computational operations.

This process reveals the double function of classification. Classification can reduce a complex life to a limited category that a technical system is able to process. Yet in *The Unarchivable*, it also created an opportunity. The model was not asked simply to detect “a pigeon.” Huihui and Diandian entered the dataset as separate classes, requiring their differences to become computationally meaningful. By separating them from the general category of pigeon, the project attempted to interrupt the anonymity imposed on urban non-human life.

The trained model operated as a speculative form of digital identification. A technology commonly used to locate and categorise objects was redirected towards two lives usually excluded from individual records. In this sense, machine vision became not only a tool of detection but also a method of sustained attention.

Yet this attention remained conditional. Huihui and Diandian could be recognised only through the photographs selected for the dataset, the labels assigned to them and the visual patterns learned from those examples. The model did not discover their identities independently. It produced them computationally through the conditions constructed by the dataset. When their bodies no longer corresponded closely enough to these learned patterns—because of rapid movement, overlap, occlusion or changes in silhouette—the stability of recognition began to break down.

*Learning to Fold* developed from this contradiction rather than from a rejection of the earlier project. The two works form reciprocal moments within the same investigation. *The Unarchivable* asks what machine recognition can make visible; *Learning to Fold* examines the conditions under which that visibility becomes unstable. The technology that grants an individual position to the bird also reveals its limits when the body can no longer be maintained as a coherent and readable object.

During the first project, detection was repeatedly disrupted when the pigeons moved rapidly, overlapped with one another or entered visually complex environments. Bounding boxes flickered, shifted, multiplied or disappeared. *Learning to Fold* isolates one recurring source of this instability: the folding and unfolding of a pigeon’s wing. The same YOLO object-detection framework was used to examine how rapid transformation, self-occlusion and changing silhouettes affected computational recognition.

The project distinguishes embodied seeing from computational abstraction and classification. Embodied seeing involves an encounter situated within a perceptual and meaningful world. Computational abstraction, by contrast, translates visual variation into quantifiable features, while classification assigns those features to predefined categories. Machine recognition combines the latter operations, even though its interface often presents the outcome as though the machine had directly perceived a stable object (Paglen 2016).

The project develops the term *algorithmic disorientation* to describe moments when this calculation cannot be maintained consistently across successive frames.¹ “Disorientation” does not imply that the algorithm is conscious, confused or capable of subjective experience. Rather, it names an operational condition in which the system loses the spatial and temporal consistency necessary to produce the appearance of one coherent object moving through time. The calculations continue, but bounding boxes compete for position, confidence values fall, and the detected object may fragment into several uncertain presences.

To investigate this condition, *Learning to Fold* moves away from the complete pigeon and focuses on a custom-built skeletal wing structure. The structure abstracts the wing into hinges, extensions and folding relations, allowing selected movements to be repeated under more controlled conditions. It does not claim to reproduce pigeon anatomy. Instead, it functions as an experimental device for testing folding, vibration, acceleration, concealment and changes in outline.

These detection failures cannot be attributed to one cause. Within the experiments, folding produced overlap and concealed previously visible features. Speed introduced motion blur and greater visual differences between consecutive frames. Lighting, camera frame rate, object scale, processing latency and the limits of the training data also affected the model’s outputs. The project therefore does not claim that pigeon wings are intrinsically or permanently beyond computation. Improved cameras, larger datasets, faster hardware or different model architectures might reduce many of these errors. What matters is the temporary interval in which the system used in the project cannot stabilise the moving body as a continuous computational identity.

Henri Bergson’s concept of duration helps to frame this interval. Bergson distinguishes lived duration from spatialised models of time that divide movement into separate and measurable units. In duration, successive moments do not exist as isolated points but flow into and transform one another (Bergson 2001, 100–106). Object detection, by contrast, samples movement through separate frames and reconstructs continuity from a sequence of individual predictions. Flickering and multiplying boxes expose moments when this reconstruction no longer appears seamless. The wing continues moving, but the model’s account of it becomes discontinuous.

Building on these ideas, the project develops the term *temporal opacity*.² Édouard Glissant’s right to opacity challenges the assumption that difference must become fully transparent or comprehensible in order to enter into relation. Opacity does not simply mean invisibility, isolation or withdrawal. It protects that which cannot be entirely reduced to the terms through which another person or system seeks to understand it (Glissant 1997, 189–94).

Zach Blas extends this concern into computational culture through the concept of *informatic opacity*. Blas examines opacity in relation to systems that convert identity, difference and behaviour into readable and classifiable information (Blas 2018, 197–99). His account is particularly relevant to technologies whose operation depends on rendering bodies computationally legible.

*Temporal opacity* is not a term borrowed directly from either Glissant or Blas. Rather, it is developed through their work to describe unstable legibility across successive moments of object detection. *Learning to Fold* brings opacity into the temporal operation of machine vision. The wing is detected in one frame, lost in another and multiplied in the next. Its presence is not absent, but unevenly legible.

Temporal opacity therefore does not prove that life will always exceed technology, nor does it turn the pigeon into a conscious political resistor. It describes a provisional condition produced through the relationship between a moving body, a camera, a dataset and an object-detection model. While this instability lasts, the bird remains visibly present without being fully maintained as one stable computational object.

Together, the two projects position recognition and opacity not as simple opposites, but as two conditions within the same encounter between machine vision and non-human life. Recognition can interrupt indifference and bring an overlooked life into attention. Yet complete legibility may also reduce that life to the categories through which a system is able to recognise it.

More powerful hardware, faster cameras, larger datasets or different detection models may eventually reduce, or even remove, many of the failures observed in the project. The significance of these failures therefore does not depend on their permanence. During this brief interval, the pigeon remains within the camera’s field of view, yet the model can no longer hold its moving body within a stable computational form. As the wing folds, accelerates and changes its outline, recognition is momentarily suspended. The bird does not leave the technological system. Instead, its movement opens a fold within recognition itself: a moment in which it remains present, but not fully resolved.

### **Notes**

- Algorithmic disorientation is a term developed within this project. It refers to an observable instability in the model’s outputs rather than to a subjective or psychological state attributed to the algorithm.

- Temporal opacity is also developed within this project. It draws on Glissant’s right to opacity and Blas’s informatic opacity but refers specifically to uneven computational legibility across successive frames of object detection.

### 

### **Citation**

- Bergson, Henri. 2001\. Time and Free Will: An Essay on the Immediate Data of Consciousness. Translated by F. L. Pogson. Mineola, NY: Dover Publications.

- Blas, Zach. 2018\. “Informatic Opacity.” In Posthuman Glossary, edited by Rosi Braidotti and Maria Hlavajova, 197–99. London: Bloomsbury Academic.

- Glissant, Édouard. 1997\. Poetics of Relation. Translated by Betsy Wing. Ann Arbor: University of Michigan Press.

- Paglen, Trevor. 2016\. “Invisible Images (Your Pictures Are Looking at You).” The New Inquiry, December 8, 2016\. https://thenewinquiry.com/invisible-images-your-pictures-are-looking-at-you/.

- Redmon, Joseph, Santosh Divvala, Ross Girshick, and Ali Farhadi. 2016\. “You Only Look Once: Unified, Real-Time Object Detection.” In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, 779–88. https://doi.org/10.1109/CVPR.2016.91.

#### 

#### 
