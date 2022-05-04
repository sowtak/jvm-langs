import java.util.Properties
import javax.mail._
import javax.mail.internet._
import java.util.Date
import scala.jdk.CollectionConverters._

class MailAgent(
    to: String,
    cc: String,
    bcc: String,
    from: String,
    subject: String,
    content: String,
    smtpHost: String
) {
  var message: Message = null
  message = createMessage

  message.setFrom(new InternetAddress(from))
  setToCcBccRecipients
  message.setSentDate(new Date())
  message.setSubject(subject)
  message.setText(content)

  // throws MessagingException
  def sendMessage {
    Transport.send(message)
  }


  def createMessage: Message = {
    val properties = new Properties()
    properties.put("mail.smtp.host", smtpHost)
    val session = Session.getDefaultInstance(properties, null)
    return new MimeMessage(session)
  }

  def setToCcBccRecipients {
    setMessageRecipients(to, Message.RecipientType.TO)
    if (cc != null) {
      setMessageRecipients(cc, Message.RecipientType.CC)
    }
    if (bcc != null) {
      setMessageRecipients(cc, Message.RecipientType.BCC)
    }
  }

  def setMessageRecipients(recipient: String, recipientType: Message.RecipientType) {
    val addressArray = buildInternetAddressArray(recipient).asInstanceOf[Array[Address]]
    val _ = if ((addressArray != null) && (addressArray.length > 0)) {
      message.setRecipients(recipientType, addressArray)
    }
  }

  def buildInternetAddressArray(address: String): Array[InternetAddress] = {
      return InternetAddress.parse(address)
  }

}


