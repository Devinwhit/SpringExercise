package whitney.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import whitney.Interfaces.IUserService;
import whitney.models.ResetPasswordToken;
import whitney.repositories.ResetPasswordTokenRepo;

@Service
public class UserService implements IUserService {

    @Autowired
    private ResetPasswordTokenRepo resetRepo;
    @Override
    public boolean verifyToken(String token) {
        ResetPasswordToken verifiedToken = resetRepo.findByToken(token);
        final long DAY = 24 * 60 * 60 * 1000;
        if (verifiedToken != null && verifiedToken.getCreatedDate().getTime() > System.currentTimeMillis() - DAY){
            return true;
        }
        return false;
    }
}
